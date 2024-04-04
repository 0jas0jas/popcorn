from flask import Flask, jsonify
from flask_cors import CORS

import os
import re
import numpy as np
import pandas as pd
import requests
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# model training
cwd = os.getcwd()

df = pd.read_csv(os.path.join(cwd, "server", "datasets", "updated_music.csv"))
movies = pd.read_csv(os.path.join(cwd, "server", "datasets", "movies.csv"))

shuffled_df = df.sample(frac=1, random_state=42)  # frac=1 for shuffling all rows
shuffled_df = shuffled_df.reindex(columns=df.columns)

X = shuffled_df.drop(['artists', 'album_name', 'track_name', 'explicit', 'track_genre', 'popularity', 'track_id', 'movie_genre', 'duration_ms', 'Unnamed: 0'], axis = 1)
y = shuffled_df['movie_genre']

rf_classifier = RandomForestClassifier(n_estimators=200, random_state=42, min_samples_split = 5, max_depth = 20, max_features='sqrt', verbose=0) 
rf_classifier.fit(X, y)


# get list of movies
def get_list_movies(playlistID):
    os.environ["SPOTIPY_CLIENT_ID"] = "eba511b4fba64cb1a4a12d9e4c0c1626"
    os.environ["SPOTIPY_CLIENT_SECRET"] = "7f1b8994e4e748bcbbc6f16d162a15bd"

    sp = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials())

    results = sp.playlist_tracks(playlistID)

    # Extract song information
    tracks = results['items']
    while results['next']:
        results = sp.next(results)
        tracks.extend(results['items'])

    genres_playlist = {}

    # Print out the track names
    for track in tracks:
        track_id = track['track']['id']
        audio_features = sp.audio_features(track_id)[0]

        danceability = audio_features['danceability']
        energy = audio_features['energy']
        key = audio_features['key']
        loudness = audio_features['loudness']
        mode = audio_features['mode']
        speechiness = audio_features['speechiness']
        acousticness = audio_features['acousticness']
        instrumentalness = audio_features['instrumentalness']
        liveness = audio_features['liveness']
        valence = audio_features['valence']
        tempo = audio_features['tempo']
        time_signature = audio_features['time_signature']

        song_data = []
        song_data_key = []

        for key in audio_features:
            if key in('analysis_url', 'track_href', 'uri', 'id', 'type', 'duration_ms'): continue
            song_data.append(audio_features[key])
            song_data_key.append(key)

        genre = rf_classifier.predict(np.array(song_data).reshape(1, -1))

        if str(genre) in genres_playlist: genres_playlist[str(genre)] += 1
        else: genres_playlist[str(genre)] = 1

    top_3_genres = sorted(genres_playlist, key=genres_playlist.get, reverse=True)[:3]

    list_movies = []

    for genre in top_3_genres:
        movies = pd.read_csv(os.path.join(cwd, "server", "datasets", "splitted", f"{genre[2:-2]}.csv"))

        movie_rows = movies.sample(n=4)


        for index, row in movie_rows.iterrows():
            list_movies.append(row['movie_name'])

    return list_movies


#app instance

app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods = ['GET'])
def returnhome():
    print("USED HOME")
    return jsonify({
        'message': "Hello World!"
    })

@app.route("/api/fetchMovies/<id>", methods = ['POST'])
def returnMovies(id):
    print("Fetching movies")
    moviesGenres = get_list_movies(id)
    if(moviesGenres): 
        if(len(id) == 22): return jsonify({
            'movieList': moviesGenres
        })
        print("FAILED")

    return jsonify({
        'movieList': ["Failed"]})


if __name__ == "__main__":
    app.run(debug = True, port = 8080)


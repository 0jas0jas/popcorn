import os
import re 

import requests 

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


os.environ["SPOTIPY_CLIENT_ID"] = "f5836f58dc294b01bcb8c900dc75bf2e"
os.environ["SPOTIPY_CLIENT_SECRET"] = "70784fe056534696ba70dfbd18a045bb"

sp = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials())

playlistURL = input("Yo, put in your playlist URL, mayte")
playlistID =  playlistURL[34:56]

 #Get the playlist tracks
results = sp.playlist_tracks(playlistID)

# Extract song information
tracks = results['items']
while results['next']:
    results = sp.next(results)
    tracks.extend(results['items'])

# Print out the track names
for track in tracks:
    print(track['track']['name'])

    result = sp.search(track['track']['name'])
    track = result['tracks']['items'][0]

    artist = sp.artist(track["artists"][0]["external_urls"]["spotify"])
    print("artist genres:", artist["genres"])

    album = sp.album(track["album"]["external_urls"]["spotify"])
    print("album genres:", album["genres"])
    print("album release-date:", album["release_date"])

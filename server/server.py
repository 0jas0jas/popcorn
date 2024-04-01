from flask import Flask, jsonify
from flask_cors import CORS

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
    print(id)
    if(id == "37i9dQZF1EQpj7X7UK8OOF"): return jsonify({ 'message': "GOT IT!"})
    return jsonify({'message': "NOPE!"})

if __name__ == "__main__":
    app.run(debug = True, port = 8080)

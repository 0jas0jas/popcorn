import React, { useState, useEffect } from 'react';

const genreDict: GenreDict = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
  };
  

function ReturnMovies({ movieList }) {


  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const tmdbKey = "4b0ab38b400d23c78ea773736758e1af";
        const moviesData = await Promise.all(movieList.map(movieName => {
          const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&page=1&api_key=${tmdbKey}`;
          return fetch(searchUrl).then(response => response.json());
        }));
        console.log("Hello Hi how ar eyou");
        console.log(moviesData[1].results[0].title);
        console.log(moviesData[0].results[0].title);
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    }

    fetchMovies();
  }, [movieList]);

  if (loading) {
    return <div>Loading...</div>;
  }

//   .filter(function(mv) {
//     if (mv) {
//     return true; // skip
//     }
//     return false;
// })

  return (
    <div className="min-h-screen col-span-2 grid grid-cols-2 gap-12 p-24 place-items-center font-mono bg-gray-900">
      { movies.map(movieData => {
        console.log("YOOOOO You made it here");
        // console.log(movieData.results[0].title); 
        let genre = "";
        movieData.results[0].genre_ids.forEach((id: number) => {
            genre = genreDict[id] + " | " + genre;
        });
        console.log(genre);
        return (
          <div key={movieData.results[0].id} className="bg-white rounded-md bg-gray-800 shadow-lg">
            <div className="md:flex px-4 leading-none max-w-4xl mx-auto">
              <div className="flex-none ">
                <img
                  src={`https://image.tmdb.org/t/p/original${movieData.results[0].poster_path}`}
                  alt="pic"
                  className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                />
              </div>

              <div className="flex-col text-gray-300">

                <p className="pt-4 text-2xl text-slate-950 font-bold">{movieData.results[0].title}</p>
                <div className="text-md flex justify-between px-4 my-2">
                  <span className="font-bold text-slate-600">{genre}</span>
                </div>
                <p className="hidden md:block px-4 my-4 text-sm text-left text-slate-500">{movieData.results[0].overview}</p>

                <p className="flex text-md px-4 my-2 text-black">
                  {movieData.results[0].vote_average}

                </p>

                <div className="text-xs">
                  <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>

                  <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>

                  <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReturnMovies;

"use client"; // This is a client component 👈🏽

import { Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ReturnMovies from './ReturnMovies'; 

// function returnMovies(playlistUrl: string){


//   const playlistID = (playlistUrl.slice(34, 56));
//   // const serverURL = "http://127.0.0.1:8080/api/fetchMovies";
//   const serverURL = "https://8080-0jas0jas-popcorn-k8vlt78igny.ws-us110.gitpod.io/api/home";
//   // const serverURL = "https://httpbin.org/get";
//   const temp = serverURL.concat("/");
//   const finalURL = temp.concat(playlistID);
//   console.log(finalURL);

//   const [mg1, setMg1] = useState(null);
//   const [mg2, setMg2] = useState(null);
//   const [mg3, setMg3] = useState(null);

//   useEffect(() => {
//     const go = async () => {
//       const response = await fetch(serverURL, {
//         method: 'get',
//         headers: {
//           'Content-Type': 'application/json'
//         }, });
//       const data = await response.json();
//       setMg1(data.url);
//       // setMg2(data.second);
//       // setMg3(data.third);
//     };
//     go();
//   },[])


//   console.log(mg1);
//   console.log(mg2);
//   console.log(mg3);

//   let returnVal;

//   let movie = "The Matrix";
  
//   const tmdbKey = "4b0ab38b400d23c78ea773736758e1af";



//   const posterPath = "https://image.tmdb.org/t/p/original/";

//   const [results, setResults] = useState(null);
//   const [movieGenres, setMovieGenres] = useState([]);
//   const [year, setYear] = useState(null);
//   const [rating, setRating] = useState(null);
//   const [popularity, setPopularity] = useState(null);

//   useEffect(() => {
//     const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&page=1&api_key=${tmdbKey}`;
//     const options Hello Hi how ar eyou ReturnMovies.tsx:15:16

//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//       }
//     };

//     fetch(url, options)
//       .then(res => res.json())
//       .then(json => setResults(json.results[0]))
//       .catch(err => console.error('error:' + err));
//   }, []); // empty dependency array to run only once when component mounts

  // useEffect(() => {
  //   if (results !== null) {
  //     const genreIds = results.genre_ids;
  //     if (genreIds && genreIds.length > 0) {
  //       fetchGenres(genreIds);
  //     }
  //   }
  // }, [results]);

  // const fetchGenres = (genreIds) => {
  //   const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbKey}`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //     }
  //   };

  //   fetch(url, options)
  //     .then(res => res.json())
  //     .then(json => {
  //       const genres = json.genres.filter(genre => genreIds.includes(genre.id)).map(genre => genre.name);
  //       setGenres(genres.join(", "));
  //       setYear(results.release_date ? new Date(results.release_date).getFullYear() : null);
  //       setRating(results.vote_average);
  //       setPopularity(results.popularity);
  //     })
  //     .catch(err => console.error('error:' + err));
  // };


//   if( mg1 == null || mg1[0] == "did"){
//     returnVal = ( <div>SOMETHING IS WORKING</div>)
//   }
//   returnVal = (
//     <div className="min-h-screen col-span-2 grid grid-cols-2 gap-12 p-24 place-items-center font-mono bg-gray-900">
// {movies.map(movieData => {
//   console.log("YOOOOO You made it here");
//   console.log(movieData.results[0].title); // Debugging
//   return (

//     <div key={movieData.results[0].id} className="bg-white rounded-md bg-gray-800 shadow-lg">
//             <div className="md:flex px-4 leading-none max-w-4xl mx-auto">
//         <div className="flex-none ">
//         <img
//           src={`https://image.tmdb.org/t/p/original${movieData.results[0].poster_path}`}
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">{movieData.results[0].title}</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">{movieData.results[0].genre_ids}</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">{movieData.results[0].overview}</p>
          
//           <p className="flex text-md px-4 my-2">
//           {movieData.results[0].vote_average}

//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//   );
// })}


//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div className="md:flex px-4 leading-none max-w-4xl">
//         <div className="flex-none ">
//         <img
//           src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
//           alt="pic"
//           className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div className="flex-col text-gray-300">

//           <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
//           <div className="text-md flex justify-between px-4 my-2">
//             <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
//             <span className="font-bold"></span>
//           </div>
//           <p className="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>
          
//           <p className="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span className="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div className="text-xs">
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//     </div>
//   </div>
//     </div>
//   )
  


//   return returnVal;
// }



export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 p-12 gap-3 place-content-center">
        <div className="col-span-1 h-24">Logo</div>
        <div className="col-span-1 h-24 text-end">Aditya <br></br> Ojas</div>
      
        <div className="col-span-2 flex items-center justify-center">
          <div className="text-center p-20 text-8xl"><span className="text-blue-400">Pop</span>corn</div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          
          <Input className="text-center h-12 w-full p-2 rounded-lg justify-between bg-white text-black md:w-3/4 lg:w-1/3 pl-12" placeholder="Paste your Spotify Playlist URL here!"/>
        </div>

        <div className="col-span-2 h-32 text-center"></div>

        <div className="col-span-2">
          <ReturnMovies movieList={["The Matrix", "The Hangover", "Boyhood", "Empire Strikes Back"]}/>
        </div>
      </div>
    </main>
  );
}

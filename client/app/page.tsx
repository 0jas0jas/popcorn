"use client"; // This is a client component 👈🏽

import { Input, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ReturnMovies from './ReturnMovies'; 

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [movieList, setMovieList] = useState<string[]>([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickity = () => {
    returnMovies(inputValue);
  };

  const returnMovies = (playlistUrl: string) => {
    const playlistID = playlistUrl.slice(34, 56);
    const serverURL = "http://127.0.0.1:8080/api/fetchMovies";
    const finalURL = `${serverURL}/${playlistID}`;

    const fetchMovieList = async () => {
      try {
        const response = await fetch(finalURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch movie list');
        }
        const data = await response.json();
        setMovieList(data.movieList);
        console.log(data.movieList);
      } catch (error) {
        console.error('Error fetching movie list:', error);
        // Handle error: e.g., set a flag to display an error message to the user
      }
    };

    fetchMovieList();
  };

  return (
    <main>
      <div className="grid grid-cols-2 p-12 gap-3 place-content-center">
        <div className="col-span-1 h-24">Logo</div>
        <div className="col-span-1 h-24 text-end">Aditya <br></br> Ojas</div>
      
        <div className="col-span-2 flex items-center justify-center">
          <div className="text-center p-20 text-8xl"><span className="text-blue-400">Pop</span>corn</div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <Input 
            className="text-center h-12 w-full p-2 rounded-lg justify-between bg-white text-black md:w-3/4 lg:w-1/3 pl-12" 
            placeholder="Paste your Spotify Playlist URL here!"
            value={inputValue}
            onChange={handleChange}
          />
          <Button 
            className="bg-blue-400 h-12 w-24 rounded-xl" 
            onClick={handleClickity}
          >
            Submit
          </Button>
        </div>

        <div className="col-span-2 h-32 text-center"></div>

        <div className="col-span-2">
          <ReturnMovies movieList={movieList} />
        </div>
      </div>
    </main>
  );
}

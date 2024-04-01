"use client"; // This is a client component 👈🏽

import { Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";


function returnMovies(playlistUrl: string){

  const playlistID = (playlistUrl.slice(34, 56));
  const serverURL = "http://127.0.0.1:8080/api/fetchMovies";
  const temp = serverURL.concat("/");
  const finalURL = temp.concat(playlistID);
  console.log(finalURL);

  const [message, setMessage] = useState(null);
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const go = async () => {
      const response = await fetch(finalURL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }, });
      const data = await response.json();
      setMessage(data.message);
    };
    go();
  },[])

  console.log(message);
  return <div>{message}</div>
}

export default function Home() {
  return (
    <main>
      <div> {returnMovies("https://open.spotify.com/playlist/33i9dQZF1EQpj7X7UK8OOF?si=adb5830c67094b2f")} </div>
      <div className="grid grid-cols-2 p-12 gap-3 place-content-center">
        <div className="col-span-1 h-24">Logo</div>
        <div className="col-span-1 h-24 text-end">Aditya <br></br> Ojas</div>
      
        <div className="col-span-2 flex items-center justify-center">
          <div className="text-center p-20 text-8xl"><span className="text-blue-400">Pop</span>corn</div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          
          <Input className="text-center h-12 w-full p-2 rounded-lg justify-between bg-white text-black md:w-3/4 lg:w-1/3 pl-12" placeholder="Enter Stuff here"/>
        </div>

        <div className="col-span-2 h-32 text-center">movies</div>
      </div>
    </main>
  );
}

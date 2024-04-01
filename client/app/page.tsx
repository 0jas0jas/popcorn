import React from "react";
import { Input } from "@nextui-org/react";

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
          
          <Input className="text-center h-12 w-full p-2 rounded-lg justify-between bg-white text-black md:w-3/4 lg:w-1/3 pl-12" placeholder="Enter Stuff here"/>
        </div>

        <div className="col-span-2 h-32 text-center">movies</div>
      </div>
    </main>
  );
}

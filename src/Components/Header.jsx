import React from "react";
import Carriage from "./baby-carriage-solid.svg"

const Header = () => {
  return (
    <header class="bg-purple-500 text-white">
      <div class="container mx-auto flex p-5 flex-col md:flex-row justify-items-start flex-auto ">
        <nav class="mx-auto">
          <a href="/" className="mr-5 hover:text-slate-200">Home</a>
          <a href="/parent" className="mr-5 hover:text-slate-200">Parent Portal</a>
          <a href="/nanny" className="mr-5 hover:text-slate-200">Nanny Portal</a>
        </nav>
        <a href="/" class="mx-auto py-2 md:py-0">
          <img className="w-8" alt="Nanny Helper Icon" fill="white" src={Carriage} />
        </a>
        <div class="mx-auto">
          
        </div>
      </div>
    </header>


  );


};

export default Header;
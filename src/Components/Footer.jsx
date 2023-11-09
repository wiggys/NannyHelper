import React from "react";
import Carriage from "./baby-carriage-solid.svg"

const Footer = () => {
    return (
<footer class="bg-purple-500 text-white">
  <div class="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col ">
     <p class = "" > Group 17 
     </p>

     <a href="/" class="ml-auto py-2 md:py-0 ">
          <img className="w-8" alt="Nanny Helper Icon" fill="white" src={Carriage} />
        </a>
  </div>
  
  
        
</footer>

);


};

export default Footer;
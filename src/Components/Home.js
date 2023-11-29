import Holding from './holding.svg';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";


export const HomePage = () => {

  const [showInfo, setShowInfo] = useState(false);

  // Function to handle the expansion and showing additional information
  const toggleInfo = () => {
    setShowInfo(prevShowInfo => !prevShowInfo);
  };

  const [showTextBox, setShowTextBox] = useState(false);
  const textBoxRef = useRef(null);

  const toggleTextBox = () => {
    setShowTextBox(prevShowTextBox => !prevShowTextBox);
  };

  const handleClickOutside = (event) => {
    if (textBoxRef.current && !textBoxRef.current.contains(event.target)) {
      setShowTextBox(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div class="flex flex-col h-screen justify-between bg-white">
      <Header />
        <section class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img class="object-cover object-center rounded" src={Holding} alt="Caregiver holding up child" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950"> Welcome to the NannyHelper
              <br class="hidden lg:inline-block" /> 
            </h1>
            <p class="mb-8 leading-relaxed text-gray-900">We have found that nannies struggle to keep up with their duties that the children's parents want them to do each day.Which is why Group 17 decided to make this application, to help struggling nannies
          and parents.
            Get started!</p>
            <div className="flex justify-center">
            <a href="/parent" className="relative">
              <button className="text-white bg-purple-500 py-2 px-6 focus:outline-none hover:shadow-md hover:shadow-purple-600 hover:bg-purple-600 rounded text-lg">
                I'm a Parent
              </button>
                {showInfo && (
                <div className="absolute top-full mt-2 left-0 bg-white p-2 border border-gray-300 shadow-lg">
                  {/* Parent additional info here */}
                  The parent page lets the parent set the nanny's schedule for the day including activities.
                </div>
              )}
            </a>
            <a href="/nanny" className="relative ml-4">
              <button className="text-gray-700 bg-purple-50 text-center py-2 px-6 hover:shadow-md hover:shadow-purple-100 hover:bg-purple-100 rounded text-lg">
                I'm a Nanny
              </button>
              {showInfo && (
                <div className="absolute top-full mt-2 left-0 bg-white p-2 border border-gray-300 shadow-lg">
                  {/* Nanny additional info here */}
                  The schedule page lets the nanny view their schedule for the day.
                </div>
              )}
            </a>
            <button onClick={toggleInfo} className="ml-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              {showInfo ? 'Hide Info' : 'More Info'}
            </button>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  );
}
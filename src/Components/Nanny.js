// This component shows the nanny page which displays the schedule sent by the parent.
// Schedule.js
import React, { Component, useContext, useEffect, useState } from 'react';
import logo from './nanny.jpg';
import { FormDataContext } from "./FormDataContext";
import noteImage from "./note.JPG";  // doctors note for testing
import { CircleMenu, CircleMenuItem, CircleMenuToggle } from "react-circular-menu";
import nannyImage from "./comfort.svg";
import Header from "./Header";
import Footer from "./Footer";
import { DemoApp } from './demoapp';
/* urgent fix; Make the div that holds the menu have enough space at the top
so as to not overlap with the text when the menu is opened. */
export const NannyPage = () => {
  // this formData basically uses a preloaded form for easy testing.
  const { formData } = useContext(FormDataContext); // access the data in read-only mode

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const [showHelp, setShowHelp] = useState(false);

  const [showAllergy, setShowAllergy] = useState(false);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  }

  const toggleAllergy = () => {
    setShowAllergy(!showAllergy);
  }

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]); // this will save formData to localStorage whenever formData changes

  return (
    <div class="flex flex-col h-screen justify-between bg-white">
      <Header />
      
      {/* Add a wrapper div with styling around your DemoApp */}
      <div className="p-6 max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-md mt-6 mb-6">
        
        {/* Optional header for the calendar */}
        <div className="mb-4">
          <h2 className="text-lg text-gray-700 font-semibold">Nanny Schedule</h2>
          <p className="text-gray-600">Select and manage your events</p>
        </div>

        {/* Calendar component */}
        <div className='overflow-hidden rounded-lg'>
          <DemoApp />
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* 
If you want to change the formData to use the form from the Parent page use the code below instead.
const { formData } = useContext(FormDataContext); // access the data in read-only mode
*/
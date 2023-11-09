// This component shows the nanny page which displays the schedule sent by the parent.
// Schedule.js
import React, { Component, useContext, useEffect } from 'react';
import logo from './nanny.jpg';
import { FormDataContext } from "./FormDataContext";
import noteImage from "./note.JPG";  // doctors note for testing
import { CircleMenu, CircleMenuItem, CircleMenuToggle } from "react-circular-menu";
import nannyImage from "./comfort.svg";
import Header from "./Header";
import Footer from "./Footer";
/* urgent fix; Make the div that holds the menu have enough space at the top
so as to not overlap with the text when the menu is opened. */
export const NannyPage = () => {
  // this formData basically uses a preloaded form for easy testing.
  const formData = {
    name: "Jane Doe",
    email: "jane@gmail.com",
    phoneNumber: "773-777-3333",
    nannyName: "Amanda McPhee",
    date: "2023-11-06",
    allergy: "Jake has peanut allergy, Jill has milk allergy",
    activity1: "Reading",
    time1: "12:00-14:00",
    activity2: "Playtime",
    time2: "15:00-16:00",
    activity3: "Nap",
    time3: "16:00-16:30",
    activity4: "Snack",
    time4: "16:30-17:00",
    image: noteImage
  };
  // Save to local storage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]); // this will save formData to localStorage whenever formData changes

  return (
    <div class="flex flex-col h-screen justify-between bg-white">
      <Header />
      <div>
        <h2>
          { /* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
          Welcome {formData.nannyName}, here is your schedule for {formData.date} as requested by {formData.name}.
          <br></br>
          The schedule opens by pressing the circular menu which goes in clockwise order.
          <br></br>
          Pressing the items in the menu opens the description.
          <br></br>
          <img src={nannyImage} alt="nanny image" className="nannyImage" />
        </h2>
      </div>
      <div>
        <CircleMenu startAngle={-90} rotationAngle={270} itemSize={10} radius="12">
          <CircleMenuItem tooltip="activity 1" onClick={() => console.log("Item 1")}>{formData.activity1}<br></br>{formData.time1}</CircleMenuItem>
          <CircleMenuItem tooltip="activity 2" onClick={() => console.log("Item 2")}>{formData.activity2}<br></br>{formData.time2}</CircleMenuItem>
          <CircleMenuItem tooltip="activity 3" onClick={() => console.log("Item 3")}>{formData.activity3}<br></br>{formData.time3}</CircleMenuItem>
          <CircleMenuItem tooltip="activity 4" onClick={() => console.log("Item 4")}>{formData.activity4}<br></br>{formData.time4}</CircleMenuItem>
          <CircleMenuItem tooltip="allergy info" onClick={() => console.log("allergy info")}>{formData.allergy}</CircleMenuItem>
        </CircleMenu>
      </div>
      <Footer />
    </div>
  );
}
/* 
If you want to change the formData to use the form from the Parent page use the code below instead.
const { formData } = useContext(FormDataContext); // access the data in read-only mode
*/
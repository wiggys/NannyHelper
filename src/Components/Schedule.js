// This component shows the nanny page which displays the schedule sent by the parent.
// Schedule.js
import React, { Component, useContext, useEffect } from 'react';
import logo from './nanny.jpg';
import {FormDataContext} from "./FormDataContext";
import noteImage from "../note.JPG";  // doctors note for testing
/* Fixme use the radial menu for the schedule 
   Fixme urgent; the schedule should be able to get data from the Parent.js inputs*/
export const SchedulePage = () => {
  
  const formData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "123-456-7890",
    nannyName: "Nanny McPhee",
    date: "2023-11-06",
    allergy: "Peanuts",
    activity1: "Reading",
    time1: "14:00",
    activity2: "Playtime",
    time2: "15:00",
    activity3: "Nap",
    time3: "16:00",
    activity4: "Snack",
    time4: "17:00",
    image: noteImage
  };
  // Save to local storage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]); // this will save formData to localStorage whenever formData changes

  return (
    <div>
      <h1> 
        This page will contain the nanny's schedule. 
        The schedule can be in a radial menu or another type.
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </h1>
    </div>
  );
}
/* 
Change the formData to use the form from the Parent page.
const { formData } = useContext(FormDataContext); // access the data in read-only mode
*/
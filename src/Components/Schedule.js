// This component shows the nanny page which displays the schedule sent by the parent.
// Schedule.js
import React, { Component, useContext } from 'react';
import logo from './nanny.jpg';
import {FormDataContext} from "./FormDataContext";
/* Fixme use the radial menu for the schedule 
   Fixme urgent; the schedule should be able to get data from the Parent.js inputs*/
export const SchedulePage = () => {
  const { formData } = useContext(FormDataContext); // access the data in read-only mode
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
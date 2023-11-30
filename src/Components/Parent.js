// The parent page is used to input the daily schedule for the nanny. And, it should send that schedule
// information to the nanny page.
import Family from './family.svg';
import BasicFormValidation from "../Components/BasicFormValidation";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useContext } from 'react';
import { FormDataContext } from "./FormDataContext";


export const ParentPage = () => {

  const [showForm, setShowForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const { formData } = useContext(FormDataContext); // access the data in read-only mode

  const emptyInitialValue = {
    name: "",
    nannyName: "",
    date: "",
    activity1: "", // simple layout that allows up to 4 activities and their duration
    time1: "",
  };

  const initialValue = showForm ? emptyInitialValue : formData;

  const toggleShowForm = () => {
    if (!showForm) {
      // If showForm is not already active, we will set it to true and updateForm to false
      setShowForm(true);
      setUpdateForm(false);
    } else {
      // If showForm is active, we just toggle it off
      setShowForm(false);
    }
  };

  const toggleUpdateForm = () => {
    if (!updateForm) {
      // If updateForm is not already active, we will set it to true and showForm to false
      setUpdateForm(true);
      setShowForm(false);
    } else {
      // If updateForm is active, we just toggle it off
      setUpdateForm(false);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-white">
      <Header />

      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="space-y-4">
          <button
            className={`bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 ${updateForm ? 'opacity-50' : 'hover:shadow-md'}`}
            onClick={() => setShowForm(!showForm)}
            disabled={updateForm}
          >
            {showForm ? 'Return' : 'Add a new schedule'}
          </button>
          
        </div>
        
        {/* SVG/Image container */}
        {!(showForm || updateForm) && (
          <img src={Family} alt="Family" className="w-auto h-100" /> // Adjust size as necessary
        )}
        </div>
      {showForm && (
        <div>
          <div className="text-center px-4"> {/* px-4 is optional for padding, adjust as needed */}
        <h1>
          This page shall be done by the parent which results in the
          <br />
          schedule that gets sent to the nanny.
          <br />
          The nanny can then access their schedule in the schedule page.
        </h1>
      </div>

          <div className="basicForm">
            <BasicFormValidation initialValue={initialValue} />
          </div>
        </div>
      )}

      {updateForm && (
        <div>
          {/* {JSON.stringify(formData, null, 2)} */}
          <BasicFormValidation initialValue={initialValue} />
        </div>
      )}

      <Footer />
    </div>
  );
};
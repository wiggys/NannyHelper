// FormDataProvider.js
import React, { useState } from 'react';
import {FormDataContext} from './FormDataContext';

const initialFormData = {
  name: "Jane Doe",
  nannyName: "Amanda McPhee",
  date: "2023-11-06",
  activity1: "Reading",
  time1: "12:00-14:00",
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

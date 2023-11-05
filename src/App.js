import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { ParentPage } from './Components/Parent';  // custom components
import { HomePage } from './Components/Home';
import { SchedulePage } from './Components/Schedule';
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import { FormDataProvider } from "./Components/FormDataProvider";

function App() {

  return (
    <FormDataProvider>
      <Router>
        <div className="App">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parent" element={<ParentPage />} />
            <Route path="/schedule" element={<SchedulePage /> } />
            {/* Add other routes as needed. It should set path*/}
          </Routes>
        </div>

      </Router>
    </FormDataProvider>
    )
}

export default App;

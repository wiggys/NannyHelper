import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import {DataProvider} from './DataContext';
import { MyRoutes } from './Routes';
import { ParentPage } from './pages/Parent';  // custom components
import { HomePage } from './pages/Home';
import { SchedulePage } from './pages/Schedule';
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";

function App() {

  return (
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
  )
}

export default App;

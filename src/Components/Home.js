import logo from './nanny.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    const handleParentButtonClick = () => {
      navigate('/parent');
    };

    const handleScheduleButtonClick = () => {
      navigate('/schedule');
    }
    /* Fix me add a home button that takes it back to the HomePage */
    return (
      <div>
        <h1> 
          Welcome to the NannyHelper!
        </h1>
        <h3>
          We have found through many interviews..
        </h3>
        <div className="Buttons">
          <button className="Custom_Button" onClick={handleParentButtonClick}> 
            Parental input
          </button>
          <button className="Custom_Button" onClick={handleScheduleButtonClick}>
            Nanny's schedule
          </button>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="React">
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> 
      </div>
    );
  }
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ParentPage } from './Components/Parent';  // custom components
import { HomePage } from './Components/Home';
import { NannyPage } from './Components/Nanny';
import { FormDataProvider } from "./Components/FormDataProvider";

function App() {
  return (
    <FormDataProvider>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parent" element={<ParentPage />} />
            <Route path="/nanny" element={<NannyPage /> } />
            {/* Add other routes as needed. It should set path*/}
          </Routes>
      </Router>
    </FormDataProvider>
    )
}

export default App;

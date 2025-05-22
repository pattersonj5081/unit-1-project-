import React, { createElement } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Router, Routes } from 'react-router-dom';


function App() {

 return (
  <>
    <div className="App">
       <div className="Header">
            <h1>Header Content</h1>
       </div>
           <div className='Navigation'>
             <ul>
              <li>Home</li>
              <li>Saved Events</li>
              <li>Profile</li>
             </ul>
           </div>
       <div className="Main">
           <h2>Main Content</h2>
       </div>
       <div className="Footer">
          <h3>Footer Content</h3>
       </div>
    </div>
  </>
 );
}

export default App;

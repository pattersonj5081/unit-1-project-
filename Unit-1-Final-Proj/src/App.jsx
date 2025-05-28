import React, { createElement } from 'react';
import './App.css';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import GetAge from './components/Age';
import GetPronouns from './components/Pronouns';
import GetHobbies from './components/Hobbies';
import Profile from './components/Profile';


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
        <div>
           <Greeting/>
       </div>
       <div>
        <GetAge/>
       </div>
       <div>
        <GetPronouns/>
       </div>
       <div>
        <GetHobbies/>
       </div>
       <div>
   
       </div>
       </div>
       <div className="Footer">
          <h3>Footer Content</h3>
       </div>
    </div>
  </>
 );
}

export default App;

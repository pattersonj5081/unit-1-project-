import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import { Feed } from "./components/feed";
import AboutPage from "./components/AboutPage";

/*From here I want to 
   1. Define what happens to profile.hobbies 
      -if profile.hobbies includes an event listed with that hobby in events.JSON, I want it to get added to the feed. 
      -define how these events will get rendered in a feed.jsx file 
      -upload events.jsx and have the function feed take {profile.hobbies} in as props
   2. Route the profile page to the feed page next
*/


function App() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    pronouns: "",
    hobbies: [],
    location: "St. Louis",
  });

  return (
      <div className="App">
        <div className="Header">
          <ul>
  <li><a href="">Feed</a></li>
  <li><a href="">About</a></li>
  <li><a href="">Saved Events</a></li>
  <li><a href="">Profile</a></li>
         </ul>
        </div>

        <div className="Main">
          <div>
            <Routes>
               <Route
                  path="/"
                  element={<UserForm profile={profile} setProfile={setProfile}/>} // this is the User From path route (It will take the suer through all of the intake questions)
                  />
               <Route path="/profile" element={<Profile profile={profile}/>}/> 
            <Route path="/feed" element={<Feed profile={profile}/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            </div>
      
        </div>
        <div className="Footer">
          <h3>Footer Content</h3>
        </div>
      </div>
  );
}

export default App;

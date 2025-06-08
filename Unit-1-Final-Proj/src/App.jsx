import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/feed";
import AboutPage from "./components/AboutPage";
import GeneralNav from "./components/GeneralNav";

/*From here I want to 
   1. Define what happens to profile.hobbies 
      -if profile.hobbies includes an event listed with that hobby in events.JSON, I want it to get added to the feed. 
      -define how these events will get rendered in a feed.jsx file 
      -upload events.jsx and have the function feed take {profile.hobbies} in as props
   2. Route the profile page to the feed page next
*/

function App() {
  const [profile, setProfile] = useState({   // Profile Structure/ Keys.
   
    name: "",
    age: "",
    pronouns: "",
    hobbies: [],
    location: "St. Louis",
  });

  return (                    //Defines core app layout and Routes
    <div className="App">
      <div id="Header">
        <img
          id="header-logo"
          className="flex-container"
          src="GGlogo.png"
          alt="Get Golden logo"
        />

        <div id="header-button-box" className="flex-container">
          <GeneralNav label="About Page" to="/about" id="about-page-button" />  
          <GeneralNav label="Profile" to="/profile" id="profile-page-button" />
          <GeneralNav label="Feed" to="/feed" id="feed-page-button" />
        </div>
      </div>
       
      <div className="Main">  
        <div>
          <Routes>    
            <Route
              path="/"
              element={<UserForm profile={profile} setProfile={setProfile} />} // this is the User From path route (It will take the user through all of the onboarding questions.)
            />
            <Route path="/profile" element={<Profile profile={profile} />} />
            <Route path="/feed" element={<Feed profile={profile} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>

      <div className="flex-container" id="Footer">
        <h2>Get Golden &copy;</h2>
      </div>
    </div>
  );
}

export default App;

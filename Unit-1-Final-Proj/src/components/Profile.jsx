import React from "react";
import GeneralNav from "./GeneralNav";

export default function Profile({ profile }) {
  //Profile Screen
  const { name, age, pronouns, hobbies, location } = profile; //keys

  return (
    //Structure & button navigation
    <div className="profile-card">
      <h2>Profile:</h2>
      <p> name: {name} </p>
      <p>age: {age}</p>
      <p>pronouns: {pronouns}</p>
      <p>hobbies:{hobbies.join(",")}</p>
      <p>location: {location}</p>
      <div className="flex-container" id="profile-buttons-container">
        <GeneralNav
          to="/"
          label="Edit Profile"
          style={{
            backgroundColor: "#E7BF21",
          }}
        />
        <GeneralNav
          to="/feed"
          label="Continue to Feed"
          style={{
            backgroundColor: "#E7BF21",
          }}
        />
      </div>
    </div>
  );
}

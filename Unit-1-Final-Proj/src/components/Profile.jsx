import React from "react";
import GeneralNav from "./GeneralNav";

export default function Profile({ profile }) {
  const { name, age, pronouns, hobbies, location } = profile;

  return (
    <div>
      <h2>Profile:</h2>
      <p> name: {name} </p>
      <p>age: {age}</p>
      <p>pronouns: {pronouns}</p>
      <p>hobbies: {hobbies.join(",")}</p>
      <p>location: {location}</p>
      <div>
    <GeneralNav to="/feed" label="Continue to Feed"/>
    </div>
    </div>
  );
}

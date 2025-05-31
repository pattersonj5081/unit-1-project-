import React, { useState } from "react";

export default function GetHobbies({ value, onChange }) {
  const options = [
  "reading",
  "cooking",
  "gardening",
  "painting",
  "writing",
  "knitting",
  "hiking",
  "photography",
  "traveling",
  "dancing",
  "yoga",
  "fishing",
  "birdwatching",
  "woodworking",
  "playing music",
  "baking",
  "cycling",
  "scrapbooking",
  "volunteering",
  "meditation"
];

  return (
    <form>
      {options.map((hobby) => (
        <label key={hobby}>
          <input
            type="checkbox"
            name="Hobbies"
            value={hobby}
            checked={value.includes(hobby)} // because this is a MULTI-SELECT
            onChange={onChange}
          />
          {hobby}
        </label>
      ))}
    </form>
  );
}

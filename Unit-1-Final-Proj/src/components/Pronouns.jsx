import React, { useState } from "react";

export default function GetPronouns({ value, onChange }) {
  //Pronoun Screen
  return (
    <div id="pronouns">
      <form>
        <label>
          What are your pronouns?
          <br />
          <input
            type="radio"
            name="pronouns"
            value="She/Her/Hers"
            checked={value === "She/Her/Hers"}
            onChange={onChange}
          />
          <label for="She/Her/Hers">She/Her/Hers</label>
          <br></br>
          <br />
          <input
            type="radio"
            name="pronouns"
            value="He/Him/His"
            checked={value === "He/Him/His"}
            onChange={onChange}
          />
          <label for="He/Him/His">He/Him/His</label>
          <br></br>
          <br />
          <input
            type="radio"
            name="pronouns"
            value="They/Them/Theirs"
            checked={value === "They/Them/Theirs"}
            onChange={onChange}
          />
          <label for="They/Them/Theirs">They/Them/Theirs</label>
          <br></br>
          <br />
          <label for="Other">Other:</label>
          <br></br>
          <input
            type="text"
            id="other"
            name="pronouns"
            value={
              value === "She/Her/Hers" ||
              value === "He/Him/His" ||
              value === "They/Them/Theirs"
                ? ""
                : value
            }
            onChange={onChange}
          />
          <br />
        </label>
      </form>
    </div>
  );
}

import React, { useState } from "react";

export default function GetAge({ value, onChange }) {
  //Age screen (Age warning conditionally renders. Functionality in UserForm component)
  return (
    <div id="age">
      <form>
        <label htmlFor="age-input">
          What is your age?
          <input type="number" name="age" value={value} onChange={onChange} />
        </label>
      </form>
    </div>
  );
}

import React, { useState } from "react";

export default function GetAge({ value, onChange }) {
  return (
    <div>
      <form>
        <label>
          What is your age?
          <input type="text" name="age" value={value} onChange={onChange} />
        </label>
      </form>
    </div>
  );
}

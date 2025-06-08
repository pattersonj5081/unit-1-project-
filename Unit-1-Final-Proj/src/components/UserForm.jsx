import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import GetAge from "./Age";
import GetPronouns from "./Pronouns";
import GetHobbies from "./Hobbies";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

//User Form Component will conditionally render the onbarding pages for the user, and handle most of the onbarding useEffect and useState
export default function UserForm({ profile, setProfile }) {
  const [showWarning, setShowWarning] = useState(false); //Warning for those 64 and younger

  const steps = ["name", "age", "pronouns", "hobbies"]; //Represent onbarding screens

  const [currentStep, setCurrentStep] = useState("name"); //This will allow us to enter a step and have it render

  //conditionally renders the warning if the age subitted is less than 65
  useEffect(() => {
    if (currentStep === "age" && profile.age) {
      setShowWarning(profile.age < 65);
    }
  }, [currentStep, profile.age]); //This will help to make sure this doesn't pop up on every render.
  //conditionally renders each page in order
  // takes user through each screen going forward
  const handleNext = () => {
    const index = steps.indexOf(currentStep);
    if (index < steps.length - 1) {
      setCurrentStep(steps[index + 1]);
    }
  };
  //taskes user through each screen going backwards
  const handleBack = () => {
    const index = steps.indexOf(currentStep);
    if (index > 0) {
      setCurrentStep(steps[index - 1]);
    }
  };
  const navigate = useNavigate(); // using use navigate to route the submit button to the profile.
  const handleSubmit = (event) => {
    event.preventDefault(); //Had to figure out how to not have the page refresh with each submit.
    confetti({
      //Downloaded an npm package that allowed me to do this cute animation.
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    navigate("/profile");
  };

  const handleChange = (fieldName) => (e) => {
    //Decided a general handler here that targets the field is the easiest way to go.
    const { value, checked } = e.target;
    setProfile((prev) => {
      if (fieldName === "hobbies") {
        const updatedHobbies = checked
          ? [...prev.hobbies, value] // is the value checked? , if so add it to the array
          : prev.hobbies.filter((hobby) => hobby !== value); //if not, remove it, it is not a part of the ending value

        return {
          ...prev,
          hobbies: updatedHobbies,
        };
      }

      return {
        ...prev,
        [fieldName]: value, //Adds values to the appropriate key based on fieldname
      };
    });
  };
  return (
    //conditional rendering:

    <>
      <div className="onboarding-container">
        <div id="steps">
          <p>
            Step:({currentStep}) {steps.indexOf(currentStep) + 1} of{" "}
            {steps.length}
          </p>
        </div>

        {showWarning && (
          <div className="flex-container" id="warning-message">
            <h3>Warning!</h3>
            <p>
              This application is intended for those 65 and older!Please be
              advised!
            </p>
          </div>
        )}
        <div id="welcome-text" className="flex-container">
          {profile.name && <h2>Welcome, {profile.name}!</h2>}
        </div>

        <div>
          {currentStep === "name" && (
            <Greeting value={profile.name} onChange={handleChange("name")} />
          )}
        </div>

        <div>
          {currentStep === "age" && (
            <GetAge value={profile.age} onChange={handleChange("age")} />
          )}
        </div>

        <div>
          {currentStep === "pronouns" && (
            <GetPronouns
              value={profile.pronouns}
              onChange={handleChange("pronouns")}
            />
          )}
        </div>

        <div>
          {currentStep === "hobbies" && (
            <GetHobbies
              value={profile.hobbies}
              onChange={handleChange("hobbies")}
            />
          )}
        </div>

        <div id="form-button-box" className="flex-container">
          {currentStep !== "name" && (
            <button type="button" id="handle-back" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep !== "hobbies" && (
            <button type="button" id="handle-next" onClick={handleNext}>
              Next
            </button>
          )}
          {currentStep === "hobbies" && (
            <button id="handle-submit" type="button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

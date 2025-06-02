import { useState } from "react";
import Greeting from "./Greeting";
import GetAge from "./Age";
import GetPronouns from "./Pronouns";
import GetHobbies from "./Hobbies";
import { useNavigate } from "react-router-dom";

export default function UserForm({ profile, setProfile }) {
  const [showWarning, setShowWarning]= useState(false); 
  const steps = ["name", "age", "pronouns", "hobbies", "feed"];
  const [currentStep, setCurrentStep] = useState("name");
  const handleNext = () => {
    const index = steps.indexOf(currentStep);
    if (index < steps.length - 1) {
      setCurrentStep(steps[index + 1]);
    }
    if (currentStep === "age"){
        profile.age < 65 ? setShowWarning(true)
        : setShowWarning(false)     
    }
  };
  const handleBack = () => {
    const index = steps.indexOf(currentStep);
    if (index > 0) {
      setCurrentStep(steps[index - 1]);
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (profile) => {
    console.log("Submitted profile", profile);
    navigate("/profile");
  };
  const handleChange = (fieldName) => (e) => {
                                                   //Decided a general handler here that targets the field is the easiest way to go.
    const { value, checked } = e.target;

    

    setProfile((prev) => {
    
      if (fieldName === "hobbies") {
        const updatedHobbies = checked
          ? [...prev.hobbies, value]                          // is the value checked? , if so add it to the array
          : prev.hobbies.filter((hobby) => hobby !== value); //if not, remove it, it is not a part of the ending value

        return {
          ...prev,
          hobbies: updatedHobbies,
        };
      }

      return {
        ...prev,
        [fieldName]: value,
      };
    });
  };
  return (
    <>
    {showWarning && (
  <div>
    <h3>Warning!</h3>
    <p>This application is intended for those 65 and older!Please be advised!</p>
  </div>
)}
    <p>Step {steps.indexOf(currentStep) + 1} of {steps.length}</p>
      <div>
        {currentStep === "name" && (
          <Greeting
            value={profile.name}
            onChange={handleChange("name")}
          />
        )}
        {profile.name && <h2>Welcome, {profile.name}!</h2>}
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

        <div>
          {currentStep !== "name" && <button onClick={handleBack}>Back</button>}
          {currentStep !== "hobbies" && (
            <button onClick={handleNext}>Next</button>
          )}
          {currentStep === "hobbies" && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
}

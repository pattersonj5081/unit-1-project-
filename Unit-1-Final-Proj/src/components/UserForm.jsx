import { useState } from "react"
import Greeting from "./Greeting";
import GetAge from "./Age";

export default function UserForm (){
const [profile, setProfile]= useState({
    userName:"",
    age: "",
    pronouns:"",
    hobbies: []
});

function handleChange(fieldName) {     //Decided a general handler here that targets the field is the easiest way to go. 
return function (e){
    const value= e.target.value
    setProfile(prevProfile =>({
...prevProfile,
[fieldName]:value
 }));
};

}
return (
    <>
    <div>
   <Greeting 
   value={profile.userName}
   onChange={handleChange}
   />
    {profile.userName && <h2>Welcome,{profile.userName}!</h2>}
   </div>
   <div>
    <GetAge
    value={profile.age}
    onchange={handleChange}
    />
    
   </div>
   </>
   
);
}


import React,{useState} from "react";

export default function GetPronouns (){

const [profile, setProfile] = useState({
   
    pronouns:"",
});

const handleChange = (e) => {
 const{name, value}=e.target;
    setProfile((prevData)=>({
      
      ...prevData,

      [pronouns]:value,
 }));
};

return(
    <div>
        <h1>Tell us a bit about you</h1>
        <form>
            <label>
                What are your pronouns? 
                <br/>
                <input
                type="radio"
                id="She/Her/Hers"
                 name="pronouns"
                value={profile.pronouns}
                onClick={handleChange}
                />
                 <label for="She/Her/Hers">She/Her/Hers</label><br></br>
                <br/>

                <input
                 type="radio"
                id="He/Him/His"
                name="pronouns"
                value={profile.pronouns}
                onClick={handleChange}
                />
                <label for="He/Him/His">He/Him/His</label><br></br>
                <br/>
                
                <input
                 type="radio"
                id="They/Them/Theirs"
                 name="pronouns"
                value={profile.pronouns}
                onClick={handleChange}
                />
                <label for="They/Them/Theirs">They/Them/Theirs</label><br></br>
                
                <br/>
                <label for="Other">Other:</label><br></br>
                <input
                type="text"
                id="other"
                 name="pronouns"
                value={profile.pronouns}
                onChange={handleChange}
                />

                <br/>
            </label>
               <br/>
          <button>
            Next</button>
        </form>
    </div>
    );
}
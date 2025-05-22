import React,{useState} from "react";

export default function Greeting (){

const [formData, setFormData] = useState({
   
    name:"",
});

const handleChange = (e) => {
 const{name, value}=e.target;
    setFormData((prevData)=>({
      
      ...prevData,

      [name]:value,
 }));
};

return(
    <div>
        <h1>Ready to Get Golden?</h1>
        <form>
            <label>
                What is your first name? 
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </label>
              <br/>
                <h2>Welcome, {formData.name} !</h2>
               <br/>
          <button>Get Golden!</button>
        </form>
    </div>
    );
}


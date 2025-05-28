import React,{useState} from "react";


export default function GetHobbies (){

const [profile, setProfile] = useState({
   
    hobbies:[],
});

const handleChange = (e) => {
 const{name, value}=e.target;
    setProfile((prevData)=>({
      
      ...prevData,

      [hobbies]:value,
 }));
};

return(
    <div>
        <h1>Tell us a bit about you</h1>
        <form>
            <label>
                Select all hobbies your are interested in!
                <br/>
                <input
                type="checkbox"
                id="Painting or Drawing"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label for="Painting or Drawing">Painting or Drawing</label><br></br>
                <br/>

              <br/>
                <input
                type="checkbox"
                id="Painting or Drawing"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Expressing creativity through visual art" for="Painting or Drawing">Painting or Drawing</label><br></br>
                <br/>
                
               <br/>
                <input
                type="checkbox"
                id="Playing a Musical Instrument"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Like guitar, piano, or drums" for="Playing a Musical Instrument">Playing a Musical Instrument</label><br></br>
                <br/>

               <br/>
                <input
                type="checkbox"
                id="Cooking or Baking"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Experimenting with recipes and flavors" for="Cooking or Baking">Cooking or Baking</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Gardening"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Growing plants, flowers, or food" for="Gardening">Gardening</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Reading"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Fiction, nonfiction, or graphic novels" for="Reading">Reading</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Writing"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Journaling, blogging, or creative writing" for="Writing">Writing</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Photography"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Capturing moments or nature" for="Photography">Photography</label><br></br>
                <br/>


                <br/>
                <input
                type="checkbox"
                id="Hiking"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Exploring trails and enjoying nature" for="Hiking">Hiking</label><br></br>
                <br/>


                <br/>
                <input
                type="checkbox"
                id="Yoga or Meditation"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Practicing mindfulness and flexibility" for="Yoga or Meditation">Yoga or Meditation</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Knitting or Crocheting "
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Creating wearable or decorative items" for="Knitting or Crocheting">Knitting or Crocheting </label><br></br>
                <br/>


                <br/>
                <input
                type="checkbox"
                id="Dancing"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title=" Freestyle, structured, or learning choreographies" for="Dancing">Dancing</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="DIY Crafts"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Creating home décor or personalized items" for="DIY Crafts">DIY Crafts</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Volunteering"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Giving back to the community" for="Volunteering">Volunteering</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Board Games or Puzzles"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title=" Engaging in strategic or relaxing play" for="Board Games or Puzzles">Board Games or Puzzles</label><br></br>
                <br/>

                <br/>
                <input
                type="checkbox"
                id="Bird Watching "
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Observing and identifying birds" for="Bird Watching ">Bird Watching </label><br></br>
                <br/>

             <br/>
                <input
                type="checkbox"
                id="Internet Literacy"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Learn internet basics" for="Internet Literacy">Internet Literacy</label><br></br>
                <br/>

                 <br/>
                <input
                type="checkbox"
                id="Learning Languages"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Exploring new cultures through language" for="Learning Languages">Learning Languages</label><br></br>
                <br/>

                 <br/>
                <input
                type="checkbox"
                id="Fitness Training"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Weightlifting, cardio, or group classes" for="Fitness Training">Fitness Training</label><br></br>
                <br/>

                 <br/>
                <input
                type="checkbox"
                id="Bird Watching"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title="Researching and organizing trips" for="Travel Planning">Travel Planning</label><br></br>
                <br/>

                 <br/>
                <input
                type="checkbox"
                id="Aquascaping or Fishkeeping"
                 name="Hobbies"
                value={profile.hobbies}
                onClick={handleChange}
                />
                 <label title=" Designing underwater environments" for="Aquascaping or Fishkeeping">Aquascaping or Fishkeeping</label><br></br>
                <br/>

                <br/>
            </label>
               <br/>
          <button>Next</button>
        </form>
    </div>
    );
}
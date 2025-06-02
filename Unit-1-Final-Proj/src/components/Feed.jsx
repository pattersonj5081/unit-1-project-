import events from "../data/events.json"
import GeneralNav from "./GeneralNav";
/*From here I want to 
   1. Define what happens to profile.hobbies 
      -if profile.hobbies includes an event listed with that hobby in events.JSON, I want it to get added to the feed. 
      -define how these events will get rendered in a feed.jsx file 
      -upload events.jsx and have the function feed take {profile.hobbies} in as props
   2. Route the profile page to the feed page next*/

export function Feed ({profile}) {
   
const matchedEvents = events.filter((event) => 
(profile.hobbies.includes(event.hobby))
); 

return (
  <>
    {console.log("Feed received profile", profile)}
    {console.log("Feed matchedEvents:", matchedEvents)}

    {matchedEvents.map((event, index) => (
    
      <div key={index} className="event-card">
        <h3>{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.time}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <p>{event.tags.join(", ")}</p>
          </div>    
    ))}
    <div className="flex-container" id="back-to-profile">
    <GeneralNav to="/profile" label="Back to Profile" />
    </div>
  </>
);
}
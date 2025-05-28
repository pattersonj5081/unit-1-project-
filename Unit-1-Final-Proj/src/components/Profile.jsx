

export default function Profile (props){
  

   const {name, age, pronouns, hobbies} = props

    return(
    <div>
    <h2>Profile:</h2>
    <p>
    name: {name}
    age: {age}
    pronouns: {pronouns}
    hobbies: {hobbies}
   </p>
   </div>
    )
   }

import { useState } from "react";
export default function App(){
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [fullName,setFullName]=useState("");
   const handleSubmit=(e)=>{
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
   };

   return(
    <div style={{marginLeft:"20px"}}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div><level>First Name:</level>
        <input
        type="text"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        required
        >
        </input>
        </div>

        <div>
          <level>Last Name:</level>
        <input
        type="text"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        required
        >
        </input>
        </div>
        <button type="submit">submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
   )
}
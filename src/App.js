import React, { useState } from "react";
import "./styles.css";


export default function App() {
  const [valu,chef]=useState("");
  const [ans,setans]=useState("");
  function func(event)
  {
       
     
       chef(event.target.value);
  }
  function chekf(valuee)
  {
     if(Number(valuee)%4==0||Number(valuee)%400==0)
     {
        setans("True");
     }
     else
     {
       setans("False")
     }
  }
  return (
    <div className="App">
      <input onChange={func} value={valu} />
      <br></br>
      <br></br>
      <input  value={ans} />
      <br></br>
      <br></br>
      <button onClick={()=>chekf(valu)}> Check</button>
    </div>
  );
}

import React,  { useState } from "react";
import './App.css';

export default function Fixcost() {
    const [fixcosts, setFixcosts] = useState("");

  return (
    <div>
        <h1>Wie hoch sind deine monatlichen Fixkosten?</h1>
        
        <input className="inputfield" type="number" value={fixcosts} placeholder="z.B. 1.253,50€" onChange={e => setFixcosts(e.target.value)}></input>
        <p> Deine Fixkosten: {fixcosts}</p>
    </div>
  )
}




import React,  { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";


export default function Income() {
    const [income, setIncome] = useState("");

  return (
    <div>
        <h1>Wie hoch ist deine monatliches netto Gehalt?</h1>
        
        <input className="inputfield" type="number" value={income} placeholder="z.B. 2.233,50€" onChange={e => setIncome(e.target.value)}></input>

        <Link to="/payout"> <button className="bigButton"> Weiter </button></Link>
    </div>
  )
}




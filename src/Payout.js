import React,  { useState } from "react";
import './App.css';

export default function Payout() {
    const [payout, setPayout] = useState("");

  return (
    <div>
        <h1>Wann bekommst du dein nächstes Gehalt?</h1>
        
        <input className="inputfield" type="date" value={payout} placeholder="z.B. 28.12.2056" onChange={e => setPayout(e.target.value)}></input>
    </div>
  )
}




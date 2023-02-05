import React,  { useState } from "react";
import './App.css';
import Income from "./income";
import Payout from "./payout";



export default function Overview() {



  return (
    <div className="maindiv">
        <h2>Deine Fixkosten:   </h2>

        <h2>Dein Gehalt: {Income}</h2>

        <h2>Dein nächstes Gehalt: {Payout}</h2>

        <h2>mtl. Sparguthaben: </h2>

        <h2>Tage ohne Ausgaben: XX Tage</h2>
        
        <h2>Tage mit Ausgaben im Limit: XX Tage</h2>

        <h2>Tage mit Ausgaben über Limit: XX Tage</h2>
        
    </div>
  )
}




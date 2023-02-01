import React,  { useState } from "react";
import './App.css';
import Income from "./Income";
import Payout from "./Payout";



export default function Overview() {


  return (
    <div>
        <h2>Deine Fixkosten: [fixcosts]  </h2>

        <h2>Dein Gehalt: {Income}</h2>

        <h2>Dein nächstes Gehalt: {Payout}</h2>
        
    </div>
  )
}




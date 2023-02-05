import React,  { useState } from "react";
import './App.css';
import Income from "./income";
import Payout from "./payout";
import Fixcost from "./fixcost";




export default function Overview() {

    const [income, setIncome] = useState(0);
    const [fixcosts, setFixedcosts] = useState(0);

    console.log('income', income);
    console.log('fixcosts', fixcosts);

  return (
    <div className="maindiv">
        <h2>Deine Fixkosten: [fixcosts]  </h2>
        <Fixcost fixcosts={fixcosts} changeFixcosts={newFixcosts => setFixedcosts(newFixcosts)} />

        <h2>Dein Gehalt: {Income}</h2>

        <h2>Dein nächstes Gehalt: {Payout}</h2>
        
    </div>
  )
}




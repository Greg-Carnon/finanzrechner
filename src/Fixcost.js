import React, { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";


const Fixcost = () => {
    const [fixcosts, setFixcosts] = useState("");


    return (
      <div className="maindiv">
          <h1>Wie hoch sind deine monatlichen Fixkosten?</h1>
          <input className="inputfield" type="number" placeholder="z.B. 1.253,50€"></input>
        <p> Deine Fixkosten: {fixcosts}</p>
        <Link to="/income"> <button className="bigButton"> Weiter </button></Link>

    </div>
    )
}

  
  export default Fixcost;



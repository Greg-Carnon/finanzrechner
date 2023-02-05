import React, { useState } from "react";
import PropTypes from "prop-types";
import './App.css';
import { Link } from "react-router-dom";


const Fixcost = (props) => {
    const [fixcosts, setFixcosts] = useState("");


const handleSubmit = () => {
    props.onSubmit(fixcosts);
  };

    return (
      <div className="maindiv">
          <h1>Wie hoch sind deine monatlichen Fixkosten?</h1>
          <input className="inputfield" type="number" placeholder="z.B. 1.253,50€" onChange={(e) => setFixcosts(e.target.value)}></input>
        <p> Deine Fixkosten: {fixcosts}</p>
        <Link to="/income"> <button className="bigButton" onClick={handleSubmit}> Weiter </button></Link>

    </div>
    )
}

  
  export default Fixcost;


/*  export default function Fixcost() {
    const [fixcosts, setFixcosts] = useState("");

    const handleClick = () => {
        // Store the input value in state
        setFixcosts(document.getElementById("numberInput").value);
        };

  return (
    <div className="maindiv">
        <h1>Wie hoch sind deine monatlichen Fixkosten?</h1>
        
        <input className="inputfield" type="number" id="numberInput" placeholder="z.B. 1.253,50€"></input>



        

        

    </div>
  )
}

*/


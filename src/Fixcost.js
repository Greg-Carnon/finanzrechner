import React from "react";
import PropTypes from 'prop-types';
import './App.css';

function Fixcost({ fixcosts, changeFixcosts }) {
  return (
    <div>
        <h1>Wie hoch sind deine monatlichen Fixkosten?</h1>
        
        <input className="inputfield" type="number" value={fixcosts} placeholder="z.B. 1.253,50€" onChange={e => changeFixcosts(Number(e.target.value))}></input>
        <p> Deine Fixkosten: {fixcosts}</p>
    </div>
  )
}

// Definition der prop types, um Typ Vorschläge zu bekommen
Fixcost.propTypes = {
  fixcosts: PropTypes.number,
  changeFixcosts: PropTypes.func
}

// neuer Export wird benötigt
export default Fixcost




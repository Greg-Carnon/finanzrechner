import React from "react";
import PropTypes from 'prop-types'
import './App.css';

// Definition der props
function Income({ income, changeIncome }) {
  return (
    <div>
        <h1>Wie hoch ist deine monatliches netto Gehalt?</h1>
        
        <input className="inputfield" type="number" value={income} placeholder="z.B. 2.233,50€" onChange={e => {
          changeIncome(Number(e.target.value))
        }}></input>
    </div>
  )
}

// Definition der prop types, um Typ Vorschläge zu bekommen
Income.propTypes = {
  income: PropTypes.number,
  changeIncome: PropTypes.func
}

// neuer Export wird benötigt
export default Income

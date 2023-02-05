/*import './App.css';
import React, { useState } from 'react';
import Fixcost from './Fixcost';
import BackgroundWithLogo from './Loadingscreen';
import Income from './Income';
import Payout from './Payout';
import Overview from './Overview';
import Navbar from './Navigation';
import { Link, Routes, Route} from "react-router-dom";

export default function App() {
  // Declare state variables for monthly salary and fixed costs
  const [salary, setSalary] = useState(3293);
  const [fixedCosts, setFixedCosts] = useState(1620);
  const [daySalary, setDaysSalary] = useState(30);
  const [spendingsDayOne, setSpendingsDayOne] = useState(0);
  const [spendingsDayTwo, setSpendingsDayTwo] = useState(0);
  const [spendingsDayThree, setSpendingsDayThree] = useState(0);
  const [spendingsDayFour, setSpendingsDayFour] = useState(0);
  const [spendingsDayFive, setSpendingsDayFive] = useState(0);
  const [spendingsDaySix, setSpendingsDaySix] = useState(0);
  const [spendingsDaySeven, setSpendingsDaySeven] = useState(0);
  const [savings, setSavings] = useState(0);

  

  // Declare a state variable for the calculated budget
  const [budget, setBudget] = useState(0);
  const [dailyBudget, setDailyBudget] = useState(0);
  const [dailyBudgetDayTwo, setDailyBudgetDayTwo] = useState(0);
  const [leftdayOne, setLeftDayOne] = useState(0);
  const [leftdayTwo, setLeftDayTwo] = useState(0);
  const [leftdayThree, setLeftDayThree] = useState(0);
  const [leftdayFour, setLeftDayFour] = useState(0);
  const [leftdayFive, setLeftDayFive] = useState(0);
  const [leftdaySix, setLeftDaySix] = useState(0);
  const [leftdaySeven, setLeftDaySeven] = useState(0);

  const calculateBudgetDayTwo = () => {
    if (leftdayOne < 0) {
      setDailyBudgetDayTwo(dailyBudget + leftdayOne);
    } else {
      setDailyBudgetDayTwo(dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 }));
    }
  }

  // Declare a function to calculate the daily budget
  const calculateBudget = () => {
    setBudget(salary - fixedCosts);
    setDailyBudget((salary - fixedCosts)/daySalary);
  }



// Function to calculate left Day One and daily Budget Day Two
function calculateleftdayOne(){
  // calculate left day one as separate variable that not two renderings are needed
  const dayLeft = dailyBudget - spendingsDayOne;

    // use variable
    setLeftDayOne(dayLeft);

    // if you would use the variable leftdayOne here. You would get the previous state of the variable,
    // because the state update from setLeftDayOne is not finished yet and needs a re-rending.
    // That's the reason why it's better to move the calculation into a separate variable and use this
    // instead of the state variable.
  if (dayLeft < 0) {
    // use variable
    setDailyBudgetDayTwo(dailyBudget + dayLeft);
  } else {
    // use variable
    setSavings(dayLeft + leftdayTwo + leftdayThree + leftdayFour + leftdayFive + leftdaySix + leftdaySeven);
    setDailyBudgetDayTwo(dailyBudget);
  };
}
  



  const calculateleftdayTwo = () => {
    setLeftDayTwo(dailyBudget - spendingsDayTwo);
  }

  const calculateleftdayThree = () => {
    setLeftDayThree(dailyBudget - spendingsDayThree);
  }

  const calculateleftdayFour = () => {
    setLeftDayFour(dailyBudget - spendingsDayFour);
  }

  const calculateleftdayFive = () => {
    setLeftDayFive(dailyBudget - spendingsDayFive);
  }

  const calculateleftdaySix = () => {
    setLeftDaySix(dailyBudget - spendingsDaySix);
  }

  const calculateleftdaySeven = () => {
    setLeftDaySeven(dailyBudget - spendingsDaySeven);
  }

  
  


  return (
    
    <div className="maindiv">
      <Navbar />

      <BackgroundWithLogo/>
      
      <Fixcost />

      <Income />

      <Payout />

      <Overview />

      <h1>Tagesgehalt Rechner</h1>
      <p>
        Monatliches Gehalt: €
        <input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
      </p>
      <p>
        Monatliche Fixkosten: €
        <input type="number" value={fixedCosts} onChange={e => setFixedCosts(e.target.value)} />
      </p>
      <p>
        Tage bis nächstes Gehalt:
        <input type="number" value={daySalary} onChange={e => setDaysSalary(e.target.value)} />
      </p>
      <button onClick={calculateBudget}>Verbleibendes Gehalt berechnen</button>
      <p>
        Verbleibendes Monatliches Gehalt:  
         {budget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} €
      </p>
      <p>
        Tagesgehalt:  
         {dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} €
      </p>

       {/*<button onClick={calculateSavings}>Sparen berechnen</button> <br></br>
{/*
      <p>
        Sparbetrag:  
         {savings.toLocaleString('de-DE', { maximumFractionDigits: 2 })} €
      </p>




      <p>
        <h3>Tag 1</h3> 
        Tagesgehalt: {dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} € <br></br>
        Ausgaben: <input type="number" value={spendingsDayOne} onChange={e => setSpendingsDayOne(e.target.value)} /> <br></br>
        <button onClick={calculateleftdayOne}>Verbleibend berechnen</button> <br></br>
        Verbleibend: {leftdayOne.toLocaleString('de-DE', { maximumFractionDigits: 2 })} <br></br>
      </p>

   


      <p>
        <h3>Tag 2</h3> 
        <button onClick={calculateBudgetDayTwo}>Verbleibend Tag 2 berechnen</button> <br></br>
        Tagesgehalt: {dailyBudgetDayTwo.toLocaleString('de-DE', { maximumFractionDigits: 2 })} € <br></br>
        Ausgaben: <input type="number" value={spendingsDayTwo} onChange={e => setSpendingsDayTwo(e.target.value)} /> <br></br>
        <button onClick={calculateleftdayTwo}>Verbleibend berechnen</button> <br></br>
        Verbleibend: {leftdayTwo.toLocaleString('de-DE', { maximumFractionDigits: 2 })} <br></br>
      </p>
     

      <p>
        <h3>Tag 3</h3> 
        Tagesgehalt: {dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} € <br></br>
        Ausgaben: <input type="number" value={spendingsDayThree} onChange={e => setSpendingsDayThree(e.target.value)} /> <br></br>
        <button onClick={calculateleftdayThree}>Verbleibend berechnen</button> <br></br>
        Verbleibend: {leftdayThree.toLocaleString('de-DE', { maximumFractionDigits: 2 })} <br></br>
      </p>

      <p>
        <h3>Tag 4</h3> 
        Tagesgehalt: {dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} € <br></br>
        Ausgaben: <input type="number" value={spendingsDayFour} onChange={e => setSpendingsDayFour(e.target.value)} /> <br></br>
        <button onClick={calculateleftdayFour}>Verbleibend berechnen</button> <br></br>
        Verbleibend: {leftdayFour.toLocaleString('de-DE', { maximumFractionDigits: 2 })} <br></br>
      </p>

      <p>
        <h3>Tag 5</h3> 
        Tagesgehalt: {dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} € <br></br>
        Ausgaben: <input type="number" value={spendingsDayFive} onChange={e => setSpendingsDayFive(e.target.value)} /> <br></br>
        <button onClick={calculateleftdayFive}>Verbleibend berechnen</button> <br></br>
        Verbleibend: {leftdayFive.toLocaleString('de-DE', { maximumFractionDigits: 2 })} <br></br>
      </p>

      <p>
        <h3>Tag 6</h3> 
        Tagesgehalt: {dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} € <br></br>
        Ausgaben: <input type="number" value={spendingsDaySix} onChange={e => setSpendingsDaySix(e.target.value)} /> <br></br>
        <button onClick={calculateleftdaySix}>Verbleibend berechnen</button> <br></br>
        Verbleibend: {leftdaySix.toLocaleString('de-DE', { maximumFractionDigits: 2 })} <br></br>
      </p>

      <p>
        <h3>Tag 7</h3> 
        Tagesgehalt: {dailyBudget.toLocaleString('de-DE', { maximumFractionDigits: 2 })} € <br></br>
        Ausgaben: <input type="number" value={spendingsDaySeven} onChange={e => setSpendingsDaySeven(e.target.value)} /> <br></br>
        <button onClick={calculateleftdaySeven}>Verbleibend berechnen</button> <br></br>
        Verbleibend: {leftdaySeven.toLocaleString('de-DE', { maximumFractionDigits: 2 })} <br></br>
      </p>

    </div>
  );
}


*/
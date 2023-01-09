import './App.css';
import React, { useState } from 'react';

export default function App() {
  // Declare state variables for monthly salary and fixed costs
  const [salary, setSalary] = useState(0);
  const [fixedCosts, setFixedCosts] = useState(0);
  const [daySalary, setDaysSalary] = useState(0);
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

      setLeftDayOne(dailyBudget - spendingsDayOne);

      if (leftdayOne < 0) {
        setDailyBudgetDayTwo(dailyBudget + leftdayOne);
      } else {
        setSavings(leftdayOne + leftdayTwo + leftdayThree + leftdayFour + leftdayFive + leftdaySix + leftdaySeven);
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

  /*const calculateSavings = () => {
    if (leftdayOne > 0) {
      setSavings(leftdayOne + leftdayTwo + leftdayThree + leftdayFour + leftdayFive + leftdaySix + leftdaySeven);
    } 
  }
*/
  

  return (
    <div className="maindiv">
      <h1>Tagesgehalt Rechner</h1>
      <p>
        Monatliches Gehalt: €
        <input type="number" value={salary} defaultValue={3293} onChange={e => setSalary(e.target.value)} />
      </p>
      <p>
        Monatliche Fixkosten: €
        <input type="number" value={fixedCosts} defaultValue={1620} onChange={e => setFixedCosts(e.target.value)} />
      </p>
      <p>
        Tage bis nächstes Gehalt:
        <input type="number" value={daySalary} defaultValue={30} onChange={e => setDaysSalary(e.target.value)} />
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

       {/*<button onClick={calculateSavings}>Sparen berechnen</button> <br></br>*/}

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



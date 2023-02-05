import React, { useState } from "react";
import Start from './start';
import Fixcost from "./Fixcost";
import Income from "./income";
import Payout from "./payout";
import Overview from "./overview";
import Navbar from './Navigation';
import { Routes, Route} from "react-router-dom";


function App() {





  return (

    <div>
            <div> 
                <Navbar />
            </div>

            <Routes>
                <Route exact path="/" element={<Start />} />
                <Route exact path="/fixcost" element={<Fixcost/>}/>
                <Route exact path="/income" element={<Income/>}/>
                <Route exact path="/payout" element={<Payout/>}/>
                <Route exact path="/overview" element={<Overview/>}/>
            </Routes>
    </div>
   
  );
}

export default App;
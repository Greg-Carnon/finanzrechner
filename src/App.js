import React from "react";
import Start from './start';
import Fixcost from "./Fixcost";
import Income from "./Income";
import Payout from "./Payout";
import Overview from "./Overview";
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
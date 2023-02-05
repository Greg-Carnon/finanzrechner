import './App.css';
import React from "react";
import logo from "./logo_transparent.png"; 
import { Link, Routes, Route} from "react-router-dom";
import Fixcost from "./fixcost";

const Start = () => {
  return (
    <div className='maindiv'>

        <div style={{ backgroundColor: "black", height: "100vh"}}>
          <img
            src={logo}
            alt="Logo"
            style={{ display: "block", width: "40%", margin: "0 auto", paddingTop: "0px" }}
          />

        
        <Link to="/fixcost"> <button className="bigButton"> Los geht`s </button></Link>



        </div>

    </div>
  );
};

export default Start;
import React from "react";
import logo from "./logo_transparent.png"; // Pfad zu Ihrem Logo-Bild

const BackgroundWithLogo = () => {
  return (
    <div style={{ backgroundColor: "black", height: "50vh" }}>
      <img
        src={logo}
        alt="Logo"
        style={{ display: "block", width: "40%", margin: "0 auto", paddingTop: "50px" }}
      />
    </div>
  );
};

export default BackgroundWithLogo;
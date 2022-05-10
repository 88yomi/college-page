import React from "react";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <div id="header" className=" px-6 ">
      <h1>THE UNIVERSITY OF SIMCITY</h1>
      <Navigation />
    </div>
  );
};

export default Header;

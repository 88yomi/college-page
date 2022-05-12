import React from "react";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <div id="header" className="pt-6 px-6">
      <h1 className="text-2xl md:text-3xl">THE UNIVERSITY OF SIMCITY</h1>
      <Navigation />
    </div>
  );
};

export default Header;

import React from "react";
import { Navigation } from "./";

const Header: React.FC = () => {
  return (
    <>
    <div id="header" className="pt-6 pb-2 pl-6 md:pt-4">
      <h1 className="changa-one text-3xl font-bold md:text-4xl">THE UNIVERSITY OF SIMCITY</h1>
    </div>
      <Navigation />
    </>
  );
};

export default Header;

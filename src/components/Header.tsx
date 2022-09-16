import React from "react";
import { Navigation } from "./";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
    <div id="header" className="pt-6 pb-2 pl-6 md:pt-4">
      <Link to="/">
        <h1 className="font-['Montserrat'] text-4xl font-extrabold md:pt-8">THE UNIVERSITY OF SIMCITY</h1>
      </Link>
    </div>
      <Navigation />
    </>
  );
};

export default Header;

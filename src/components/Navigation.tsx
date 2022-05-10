import React from "react";

const Navigation: React.FC = () => {
  return (
    <div className=" px-6 ">
      <button className="hamburger flex flex-col w-full">
        <span className="hamburger-unit"></span>
        <span className="hamburger-unit"></span>
        <span className="hamburger-unit"></span>
      </button>
      <div className="faculties">
        Faculties
        <ul className="faculties-list divide-y divide-red-400 flex flex-col">
          <li className="flex justify-center">
            <a href="#">Faculty of Agriculture</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Basic Medical Sciences</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Clinical Sciences</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Education</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Engineering</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Law</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Life Sciences</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Pharmacy</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Physical Sciences</a>
          </li>
          <li className="flex justify-center">
            <a href="#">Faculty of Business Administration?</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

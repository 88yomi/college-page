import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";


const Enquiries = () => {
  return (
    <div className="info  px-6 md:flex md:flex-nowrap md:justify-around">
      <div className="info-enquiries mb-8">
        <span className="font-medium"> Contact the university secretaries:</span>
        <ul className="mt-2 space-y-2">
          <li className="ml-2">+234 906 838 3838</li>
          <li className="ml-2">+234 803 838 1111</li>
					<li className="mt-6 font-medium">or you can mail us at:</li>
          <li className="ml-2">unisimcity@edu.ng</li>
        </ul>
      </div>
      <ul className="info-socials mt-4 space-y-2">
        <li>
          <a href="#header" className="flex items-center">
            <AiFillLinkedin className="mr-3" />
            University of Simcity
          </a>
        </li>
        <li>
          <a href="#header" className="flex items-center">
            <AiFillFacebook className="mr-3" />
            University of Simcity
          </a>
        </li>
        <li>
          <a href="#header" className="flex items-center">
            <AiFillTwitterSquare className="mr-3" />
            unisimcity
          </a>
        </li>
        <li>
          <a href="#header" className="flex items-center">
            <AiFillInstagram className="mr-3" />
            simcityuni
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Enquiries;

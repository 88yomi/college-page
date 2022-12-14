import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Enquiries = () => {
  return (
    <div className="info px-6 py-4 md:flex md:py-6 md:flex-nowrap md:justify-around">
      <div className="info-enquiries mb-8 md:mb-0 ">
        <div>
        <span className="block mx-auto w-max font-semibold text-xl md:inline-block"> Contact the university secretaries:</span>
        <ul className="mt-4 md:mt-2">
          <li className="mx-auto w-max font-light md:ml-2">+234 906 838 3838</li>
            <li className="mt-2 mx-auto w-max font-light md:ml-2">+234 803 838 1111</li>
            <li className="mt-6 mx-auto w-max font-semibold text-xl md:ml-0">or you can mail us at:</li>
            <li className="mt-2 mx-auto w-max font-light text-lg md:ml-2">unisimcity@edu.ng</li>
        </ul>
        </div>
      </div>

      <div className="md:grid md:place-items-center">
      {/* <ul className="info-socials mt-16 md:mt-0 space-y-2 flex flex-col justify-around h-full"> */}
      {/* <div className="w-full"> */}

      <ul className="info-socials mt-16 md:mt-0 space-y-4 h-full w-fit md:w-full mx-auto">
        <li>
          <a href="#header" className="flex items-center text-lg  font-medium">
            <AiFillLinkedin className="mr-6 md:mr-3 text-xl" />
            University of Simcity
          </a>
        </li>
        <li>
          <a href="#header" className="flex items-center text-lg  font-medium">
            <AiFillFacebook className="mr-6 md:mr-3 text-xl" />
            University of Simcity
          </a>
        </li>
        <li>
          <a href="#header" className="flex items-center text-lg  font-medium">
            <AiFillTwitterSquare className="mr-6 md:mr-3 text-xl" />
            unisimcity
          </a>
        </li>
        <li>
          <a href="#header" className="flex items-center text-lg  font-medium">
            <AiFillInstagram className="mr-6 md:mr-3 text-xl" />
            simcityuni
          </a>
        </li>
      </ul>
        {/* </div> */}

      </div>
    </div>
  );
};

export default Enquiries;

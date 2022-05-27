import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-300 mt-4 h-12 flex items-center justify-center  px-6 ">
      <span className="text-center block  text-gray-800">
        Oluwayomi Balogun &copy; {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
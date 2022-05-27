import React from 'react';
import aerial from '../images/aerial.jpg';

const AerialView = () => {
	return (
    <div className="px-6 my-8">
      <img className="mx-auto w-full h-[30rem] ax-h-[80vh] object-center" src={aerial} alt="aerial view of the university of simcity" />
    </div>
  );
}

export default AerialView;
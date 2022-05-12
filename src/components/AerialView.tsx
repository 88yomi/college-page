import React from 'react';
import aerial from '../images/aerial.jpg';

const AerialView = () => {
	return (
    <div className="px-6 my-8">
      <img className="h-full" src={aerial} alt="aerial view of the universit of simcity" />
    </div>
  );
}

export default AerialView;
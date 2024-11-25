import React from 'react';
import LogoImage from '../assets/CinemaGPT-logo.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={LogoImage} alt="CinemaGPT Logo" className="h-10 sm:h-12 md:h-14" />
    </div>
  );
};

export default Logo;

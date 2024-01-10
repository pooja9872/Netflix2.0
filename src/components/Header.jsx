import React from "react";
import LOGO_IMAGE from "../assets/Netflix-Logo.wine.svg";

const Header = () => {
  return (
    <div className="absolute px-5 py-2 bg-gradient-to-b from-black z-10">
      <img src={LOGO_IMAGE} alt="netflix-logo" className="w-40 h-10" />
    </div>
  );
};

export default Header;

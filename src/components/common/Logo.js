import React from "react";

const Logo = () => {
  return (
    <img
      src="assets/group.png"
      srcSet="assets/group@2x.png 2x,
    assets/group@3x.png 3x"
      className="Group"
      alt="Logo"
    />
  );
};

export default Logo;

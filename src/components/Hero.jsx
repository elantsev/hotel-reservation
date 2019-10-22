import React from "react";

const Hero = ({ childreh, hero }) => {
  return <header className={hero}>{childreh}</header>;
};

export default Hero;
Hero.defaultProps = {
  hero: "defaultHero"
};

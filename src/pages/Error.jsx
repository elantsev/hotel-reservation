import React from "react";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import img from "../images/defaultBcg.jpeg";

const Error = () => (
  <StyledHero big img={img}>
    <Banner title="404" subtitle="page not found">
      <Link to="/" className="btn-primary">
        return home
      </Link>
    </Banner>
  </StyledHero>
);

export default Error;

import React from "react";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import img from "../images/defaultBcg.jpeg";

const Home = () => (
  <>
    <StyledHero big img={img}>
      <Banner title="luxurious room" subtitle="deluxe rooms starting at 299$">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </StyledHero>
    <Services />
    <FeaturedRooms />
  </>
);

export default Home;

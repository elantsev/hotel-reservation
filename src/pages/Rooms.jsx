import React from "react";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";
import img from "../images/room-2.jpeg";

const Rooms = () => (
  <>
    <StyledHero img={img}>
      <Banner title="our room">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </StyledHero>
    <RoomContainer />
  </>
);

export default Rooms;

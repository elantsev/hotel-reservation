import React from "react";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { useSelector } from "react-redux";

function RoomContainer() {
  const { loading, sortedRooms, rooms } = useSelector(state => state.state);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;

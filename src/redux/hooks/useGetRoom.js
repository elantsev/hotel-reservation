import { useSelector } from "react-redux";

export function useGetRoom() {
  let { rooms } = useSelector(state => state.state);

  const getRoom = slug => {
    let tempRooms = [...rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  return getRoom;
}

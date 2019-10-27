import items from "../../data";
import { FILTER_ROOMS } from "../actions/state";

const formatData = items => {
  let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);

    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

let rooms = formatData(items);
let featuredRooms = rooms.filter(room => room.featured === true);
//
let maxPrice = Math.max(...rooms.map(item => item.price));
let maxSize = Math.max(...rooms.map(item => item.size));

const initialState = {
  rooms,
  sortedRooms: rooms,
  featuredRooms,
  loading: false,
  //
  type: "all",
  capacity: 1,
  price: maxPrice,
  minPrice: 0,
  maxPrice,
  minSize: 0,
  maxSize,
  breakfast: false,
  pets: false
};

export const state = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ROOMS:
      const { name, value } = action.payload;
      let tempState = { ...state, [name]: value };
      let {
        rooms,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets
      } = tempState;

      let tempRooms = [...rooms];
      // transform values
      // get capacity
      capacity = parseInt(capacity);
      price = parseInt(price);
      // filter by type
      if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === type);
      }
      // filter by capacity
      if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      }
      // filter by price
      tempRooms = tempRooms.filter(room => room.price <= price);
      //filter by size
      tempRooms = tempRooms.filter(
        room => room.size >= minSize && room.size <= maxSize
      );
      //filter by breakfast
      if (breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
      }
      //filter by pets
      if (pets) {
        tempRooms = tempRooms.filter(room => room.pets === true);
      }

      return { ...state, [name]: value, sortedRooms: tempRooms };

    default:
      return state;
  }
};

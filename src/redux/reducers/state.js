import items from "../../data";

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

console.log(initialState);

export const state = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TECH":
      return { ...state, techNews: action.payload };

    default:
      return state;
  }
};

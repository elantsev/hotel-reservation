export const FILTER_ROOMS = "FILTER_ROOMS";

export function filterRooms(event) {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  return { type: "FILTER_ROOMS", payload: { name, value } };
}

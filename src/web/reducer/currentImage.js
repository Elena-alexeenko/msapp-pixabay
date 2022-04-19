export default function currentImage(state = [], action) {
  switch (action.type) {
    case "CHANGE_DISPLAYED_IMAGE":
      return action.payload;
    default:
      return state;
  }
}

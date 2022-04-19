export default function isPopUpCategoryOpen(state = [], action) {
  switch (action.type) {
    case "CHANGE_THE_CATEGORY":
      return action.payload;
    default:
      return state;
  }
}

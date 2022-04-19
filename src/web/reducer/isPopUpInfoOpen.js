export default function isPopUpInfoOpen(state = [], action) {
  switch (action.type) {
    case "CHANGE_STATUS_OF_POPUP_INFO":
      return action.payload;
    default:
      return state;
  }
}

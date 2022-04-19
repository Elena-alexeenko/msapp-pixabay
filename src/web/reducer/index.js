import { combineReducers } from "redux";
import imagesToRender from "./renderImages";
import currentImage from "./currentImage";
import isPopUpInfoOpen from "./isPopUpInfoOpen";
import isPopUpCategoryOpen from "./isPopUpCategoryOpen";

export default combineReducers({
  imagesToRender,
  currentImage,
  isPopUpInfoOpen,
  isPopUpCategoryOpen,
});

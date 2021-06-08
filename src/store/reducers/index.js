import { combineReducers } from "redux";

import favorites from "./favorites";
import tracks from "./tracks";

export default combineReducers({
  favorites,
  tracks,
});

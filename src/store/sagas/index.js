import { all } from "redux-saga/effects";

import tracks from "./tracks";

export default function* rootSaga() {
  return yield all([tracks]);
}

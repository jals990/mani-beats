import { takeLatest, call, put, all } from "redux-saga/effects";

import { Alert } from 'rsuite';
import api from "../../services/api";

import { searchRequestSuccess, searchRequestFailure, tracksRequestSuccess, tracksRequestFailure } from "../actions/tracks";

export function* searchSongs({ payload }) {
  try {
    const { arg } = payload;
    
    const { data } = yield call(api.get, '/search', {
      params: { q: arg }
    });

    yield put(searchRequestSuccess({ tracks: data.data}));
    
  } catch (err) {
    Alert.error(err.response.data.message);
    yield put(searchRequestFailure());
  }
}

export function* setTracks() {
  console.log('entrou')
  try{
    const { data } = yield call(api.get, '/chart');

    const tracks = data.tracks.data;

    yield put(tracksRequestSuccess({tracks: tracks}));

  }catch (err) {
    Alert.error(err.response.data.message);
    yield put(tracksRequestFailure());
  }
}

export default all([
  takeLatest("@tracks/TRACKS_REQUEST", setTracks),
  takeLatest("@tracks/SEARCH_REQUEST", searchSongs),
]);

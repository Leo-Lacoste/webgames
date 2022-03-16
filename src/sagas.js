import { call, all, put, takeLatest } from "redux-saga/effects";
import { gamesSlice } from "./slices";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// worker Saga
export function* fetchGames() {
  const games = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=50`
  );
  yield put(gamesSlice.actions.add({ games }));
}

// watcher Saga
export function* watchGames() {
  yield takeLatest("FETCH_GAMES", fetchGames);
}

// root Saga
export function* rootSaga() {
  yield all([watchGames()]);
}

import { createSlice } from "@reduxjs/toolkit";

export const bibliothequeSlice = createSlice({
  name: "bibliotheque",
  initialState: [],
  reducers: {
    add: (state, action) =>
      state.includes(action.payload.id) ? state : [...state, action.payload.id],
    remove: (state, action) => state.filter((id) => id !== action.payload.id),
    toggle: (state, action) =>
      state.includes(action.payload.id)
        ? state.filter((id) => id !== action.payload.id)
        : [...state, action.payload.id],
  },
});

export const gamesSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    add: (state, action) => [
      ...state,
      ...action.payload.games.filter(
        (game) => !state.some(({ id }) => game.id === id)
      ),
    ],
  },
});

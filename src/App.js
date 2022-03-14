import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameDetail from "./GameDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesSlice } from "./slices";
import Favorites from "./Favorites";

const queryClient = new QueryClient();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoritesSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

function App() {
  return (
    <div className="App" data-testid="app">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/games/:id" element={<GameDetail />} />
                  <Route path="/favorites" element={<Favorites />} />
                </Routes>
              </main>
            </BrowserRouter>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

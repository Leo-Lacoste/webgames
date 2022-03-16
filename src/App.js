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
import createSagaMiddleware from "redux-saga";
import { bibliothequeSlice, gamesSlice } from "./slices";
import { rootSaga } from "./sagas";

import Bibliotheque from "./Bibliotheque";

const queryClient = new QueryClient();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    bibliotheque: bibliothequeSlice.reducer,
    games: gamesSlice.reducer,
  })
);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

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
                  <Route path="/bibliotheque" element={<Bibliotheque />} />
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

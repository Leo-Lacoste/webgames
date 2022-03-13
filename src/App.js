import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameDetail from "./GameDetail";

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<GameDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameDetail from "./GameDetail";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App" data-testid="app">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/:id" element={<GameDetail />} />
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;

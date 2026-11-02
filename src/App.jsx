import { BrowserRouter, Routes, Route } from "react-router";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

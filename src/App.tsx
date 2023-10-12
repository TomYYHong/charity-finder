import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./Outlet";
import HomePage from "./components/Home";
import FavoritesPage from "./components/Favorites";
import CharityCausesPage from "./components/CharityCauses";
import CharityDetailPage from "./components/CharityDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search/:causes" element={<CharityCausesPage />} />
          <Route path="/charity/:id" element={<CharityDetailPage />} />
          <Route path="/404NotFound" element={<div>Page Not Found</div>} />
          <Route path="*" element={<div>Page Not Found</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

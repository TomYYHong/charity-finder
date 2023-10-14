import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./Outlet";
import HomePage from "./components/HomePage";
import FavoritesPage from "./components/FavoritesPage";
import CharityCausesPage from "./components/CharityCausesPage";
import CharityDetailPage from "./components/CharityDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search/:causes" element={<CharityCausesPage />} />
          <Route path="/charity/:id" element={<CharityDetailPage />} />
          <Route path="/search/" element={<div>Page Not Found</div>} />
          {/* <Route path="/NotFound" element={<div>Page Not Found</div>} />
          <Route path="*" element={<div>Page Not Found</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

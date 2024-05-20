import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

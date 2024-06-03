import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import MenuPage from "./pages//prices/MenuPage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
function NotFoundPage() {
  return <h2>404 Página Não Encontrada</h2>;
}
export default App;

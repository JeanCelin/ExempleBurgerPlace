import Home from "./components/layout/Home";
import Features from "./components/layout/Features";
import GalleryHome from "./components/layout/GalleryHome";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="container">
      <Home />
      <Features />
      <GalleryHome />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

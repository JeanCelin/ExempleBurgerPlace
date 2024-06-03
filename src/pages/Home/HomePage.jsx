import style from "./HomePage.module.css";

import Home from "./Home";
import Features from "./Features";
import GalleryHome from "./GalleryHome";
import Menu from "../../components/layout/Menu";
import Footer from "../../components/layout/Footer";
export default function HomePage() {
  return (
    <div className={style.homeContainer}>
      <Home />
      <Features />
      <GalleryHome />
      <Menu />
      <Footer />
    </div>
  );
}

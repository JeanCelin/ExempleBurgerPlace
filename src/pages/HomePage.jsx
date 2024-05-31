import style from "./HomePage.module.css";

import Home from "../components/layout/Home";
import Features from "../components/layout/Features";
import GalleryHome from "../components/layout/GalleryHome";
import Menu from "../components/layout/Menu";
import Footer from "../components/layout/Footer";
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

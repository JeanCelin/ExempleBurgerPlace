import AOS from "aos";
import "aos/dist/aos.css";

import style from "./HomePage.module.css";
import Features from "./Features";
import GalleryHome from "./GalleryHome";
import Menu from "../../components/layout/Menu";
import Footer from "../../components/layout/Footer";
import ButtonHome from "../../components/buttons/ButtonHome";
import Navbar from "../../components/layout/Navbar";
import "../../components/styles/globalStyles.css";

AOS.init();
export default function HomePage() {
  return (
    <div>
      <div className={style.homeContainer}>
        <div className={style.background}></div>
        <Navbar />
        <div className={style.homeContent}>
          <h1
            className={style.homeTitle}
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="3000">
            The Burger
          </h1>
          <p
            className={style.homeText}
            data-aos="fade-left"
            data-aos-delay="300">
            Located in the nearest shopping mall.
            <br /> We will be happy to serve you!
          </p>
          <ButtonHome />
        </div>
      </div>
      <Features />
      <GalleryHome />
      <Menu />
      <Footer />
    </div>
  );
}

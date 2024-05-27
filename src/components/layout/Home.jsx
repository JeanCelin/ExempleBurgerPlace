import AOS from "aos";
import "aos/dist/aos.css";
import style from "./Home.module.css";
import ButtonHome from "../buttons/ButtonHome";
import Navbar from "./Navbar";
AOS.init();

export default function Home() {
  return (
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
        <p className={style.homeText} data-aos="fade-left" data-aos-delay="300">
          Located in the nearest shopping mall.
          <br /> We will be happy to serve you!
        </p>
        <ButtonHome />
      </div>
    </div>
  );
}

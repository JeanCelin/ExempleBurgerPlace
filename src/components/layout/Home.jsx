import style from "./Home.module.css";
import ButtonHome from "../buttons/ButtonHome";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.background}></div>
      <Navbar />
      <div className={style.homeContent}>
        <h1 className={style.homeTitle}>The Burger</h1>
        <p className={style.homeText}>
          Located in the nearest shopping mall.
          <br /> We will be happy to serve you!
        </p>
        <ButtonHome />
      </div>
    </div>
  );
}

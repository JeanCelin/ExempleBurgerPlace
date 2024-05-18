import style from "./Home.module.css";
import ButtonHome from "../buttons/ButtonHome";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className={style.homeContainer}></div>
      <Navbar />
      <div className={style.homeContent}>
        <h1 className={style.homeTitle}>The Burger</h1>
        <p className={style.homeText}>
          Located in the nearest shopping mall.
          <br /> We will be happy to serve you!
        </p>
        <ButtonHome />
      </div>
    </>
  );
}

{
  /* <CardFeatures
        title="Irresistible Classic"
        message="The burger everyone loves! Juicy meat, melted cheese, and fresh ingredients that make your taste buds explode with flavor."
      />
      <CardFeatures
        title="Quality and Flavor"
        message="At our burger joint, quality is our top priority. We use only the best ingredients to ensure every bite is a burst of flavor."
      />
      <CardFeatures
        title="Unique Experience"
        message="More than just a burger, we offer a unique experience. From welcoming service to an inviting atmosphere, every detail is designed to make your visit unforgettable."
      /> */
}

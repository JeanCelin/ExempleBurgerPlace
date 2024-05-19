import CardFeature from "../cards/CardFeatures";
import style from "./Features.module.css";
export default function Features() {
  return (
    <div data-aos="fade-up" className={style.featureContainer}>
      <CardFeature
        title="Irresistible Classic"
        message="The burger everyone loves! Juicy meat, melted cheese, and fresh ingredients that make your taste buds explode with flavor."
      />
      <CardFeature
        title="Quality and Flavor"
        message="At our burger joint, quality is our top priority. We use only the best ingredients to ensure every bite is a burst of flavor."
      />
      <CardFeature
        title="Unique Experience"
        message="More than just a burger, we offer a unique experience. From welcoming service to an inviting atmosphere, every detail is designed to make your visit unforgettable."
      />
    </div>
  );
}

import CardFeature from "./CardFeatures";
import style from "./Features.module.css";
import Title from "../../components/layout/Title";

export default function Features() {
  return (
    <>
      <div className={style.featureContainer}>
        <Title titleMessage="Our Features" />
        <div
          className={style.cardsContainer}
          data-aos="fade-up"
          data-aos-delay="200">
          <div>
            <CardFeature
              title="Irresistible Classic"
              message="The burger everyone loves! Juicy meat, melted cheese, and fresh ingredients that make your taste buds explode with flavor."
            />
          </div>
          <div>
            <CardFeature
              title="Quality and Flavor"
              message="At our burger joint, quality is our top priority. We use only the best ingredients to ensure every bite is a burst of flavor."
            />
          </div>
          <div>
            <CardFeature
              title="Unique Experience"
              message="More than just a burger, we offer a unique experience. From welcoming service to an inviting atmosphere, every detail is designed to make your visit unforgettable."
            />
          </div>
        </div>
      </div>
    </>
  );
}

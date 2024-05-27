import style from "./MenuCard.module.css";
import MenuOptions from "./MenuOptions";

export default function MenuCard() {
  return (
    <div className={style.menuCardContainer}>
      <div
        className={style.menuCard}
        data-aos="fade-right"
        data-aos-delay="200">
        <MenuOptions />
      </div>
      <div className={style.menuCard} data-aos="fade-left" data-aos-delay="200">
        <MenuOptions />
      </div>
    </div>
  );
}

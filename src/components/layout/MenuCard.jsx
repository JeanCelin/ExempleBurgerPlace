import style from "./MenuCard.module.css";
import MenuOptions from "./MenuOptions";

export default function MenuCard() {
  return (
    <div className={style.menuCardContainer}>
      <div className={style.menuCard}>
        <MenuOptions />
      </div>
      <div className={style.menuCard}>
        <MenuOptions />
      </div>
    </div>
  );
}

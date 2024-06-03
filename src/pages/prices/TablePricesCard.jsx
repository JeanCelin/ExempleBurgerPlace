import style from "./TablePricesCard.module.css";
import TablePrices from "./TablePrices";

export default function TablePricesCard() {
  return (
    <div className={style.menuCardContainer}>
      <div
        className={style.menuCard}
        data-aos="fade-right"
        data-aos-delay="200">
        <TablePrices />
      </div>
      <div className={style.menuCard} data-aos="fade-left" data-aos-delay="200">
        <TablePrices />
      </div>
    </div>
  );
}

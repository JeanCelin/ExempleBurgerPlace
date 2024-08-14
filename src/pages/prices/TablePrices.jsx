import style from "./TablePrices.module.css";

export default function MenuOptions() {
  return (
    <div className={style.menuOptionsContainer}>
      <div className={style.menuTitle}>
        <h1>BURGERS</h1>
      </div>
      <div className={`${style.infoFood} ${style.roboto}`}>
        <div className={style.foodName}>
          <h3>Z-burger</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={style.price}>$99</div>
      </div>
      <div className={`${style.infoFood} ${style.roboto}`}>
        <div className={style.foodName}>
          <h3>Z-burger</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={style.price}>$99</div>
      </div>
      <div className={`${style.infoFood} ${style.roboto}`}>
        <div className={style.foodName}>
          <h3>Z-burger</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={style.price}>$99</div>
      </div>
      <div className={`${style.infoFood} ${style.roboto}`}>
        <div className={style.foodName}>
          <h3>Z-burger</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={style.price}>$99</div>
      </div>
      <div className={style.menuTitle}>
        <h1>JUICES</h1>
      </div>
      <div className={`${style.infoFood} ${style.roboto}`}>
        <div className={style.foodName}>
          <h3>Juice 200ml</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={style.price}>$99</div>
      </div>
      <div className={`${style.infoFood} ${style.roboto}`}>
        <div className={style.foodName}>
          <h3>Juice 200ml</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={style.price}>$99</div>
      </div>
    </div>
  );
}

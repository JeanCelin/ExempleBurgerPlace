import { Link } from "react-router-dom";
import style from "./Menu.module.css";

export default function Menu() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    scrollToTop();
  };
  return (
    <div className={style.menuContainer}>
      <Link className={style.noDecoration} to="/" onClick={handleClick}>
        <div className={style.menuContent}>Home</div>
      </Link>
      <Link className={style.noDecoration} to="/menu" onClick={handleClick}>
        <div className={style.menuContent}>Menu</div>
      </Link>
      <Link className={style.noDecoration} to="/about" onClick={handleClick}>
        <div className={style.menuContent}>About</div>
      </Link>
      <Link className={style.noDecoration} to="/contact" onClick={handleClick}>
        <div className={style.menuContent}>Contact</div>
      </Link>
    </div>
  );
}

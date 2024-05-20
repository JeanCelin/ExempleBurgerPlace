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
        <div>Home</div>
      </Link>
      <Link className={style.noDecoration} to="/menu" onClick={handleClick}>
        <div>Menu</div>
      </Link>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
}

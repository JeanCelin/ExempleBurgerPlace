import { Link } from "react-router-dom";
import style from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={style.menuContainer}>
      <Link className={style.noDecoration} to="/">
        <div>Home</div>
      </Link>
      <Link className={style.noDecoration} to="/menu">
        <div>Menu</div>
      </Link>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
}

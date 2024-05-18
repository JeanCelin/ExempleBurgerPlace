import BurgerLogo from "../img/burger-logo.png";
import MenuIcon from "../img/menu-icon.png";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <img
        className={`${style.imgNavBar} ${style.img1}`}
        src={BurgerLogo}
        alt="logo"
        title="logo"></img>
      <img
        className={`${style.imgNavBar} ${style.img2}`}
        src={MenuIcon}
        alt="menu"></img>
    </div>
  );
}

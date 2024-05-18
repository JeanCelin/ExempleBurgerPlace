import BurgerLogo from "../img/buger-logo.jpg";
import MenuIcon from "../img/menu-icon.png";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <img
        className={style.imgNavBar}
        src={BurgerLogo}
        alt="logo"
        title="logo"></img>
      <img className={style.imgNavBar} src={MenuIcon} alt="menu"></img>
    </div>
  );
}

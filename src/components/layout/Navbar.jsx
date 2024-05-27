import { Link } from "react-router-dom";
import BurgerLogo from "../img/burger-logo.png";
import MenuIcon from "../img/menu-icon.png";
import style from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarIcons}>
        <Link to="/">
          <img
            className={`${style.imgNavBar} ${style.img1}`}
            src={BurgerLogo}
            alt="logo"
            title="logo"
          />
        </Link>
        <img
          className={`${style.imgNavBar} ${style.img2}`}
          src={MenuIcon}
          alt="menu"
          onClick={handleClick}
        />
      </div>
      {showMenu && (
        <div className={style.navbarMenu}>
          <Link className={style.noDecoration} to="/menu">
            <h3>Menu</h3>
          </Link>
          <Link className={style.noDecoration} to="/about">
            <h3>About</h3>
          </Link>
          <Link className={style.noDecoration} to="/contact">
            <h3>Contact</h3>
          </Link>
        </div>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState } from "react";

import style from "./Navbar.module.css";
import BurgerLogo from "../../img/burger-logo.png";
import MenuIcon from "../../img/menu-icon.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className={style.navbarContainer}>
      <div className={style.navbarIcons}>
        <Link to="/">
          <img
            className={`${style.imgNavBar} ${style.img1}`}
            src={BurgerLogo}
            alt="logo"
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
          <Link className={style.noDecoration} to="/">
            <h3>HOME</h3>
          </Link>
          <Link className={style.noDecoration} to="/menu">
            <h3>MENU</h3>
          </Link>
          <Link className={style.noDecoration} to="/about">
            <h3>ABOUT</h3>
          </Link>
          <Link className={style.noDecoration} to="/contact">
            <h3>CONTACT</h3>
          </Link>
        </div>
      )}
    </nav>
  );
}

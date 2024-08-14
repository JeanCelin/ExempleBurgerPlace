import { Link } from "react-router-dom";
import style from "./ButtonHome.module.css";

export default function ButtonHome() {
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
    <Link to="/menu">
      <button className={style.btn_home} onClick={handleClick}>
        See menu
      </button>
    </Link>
  );
}

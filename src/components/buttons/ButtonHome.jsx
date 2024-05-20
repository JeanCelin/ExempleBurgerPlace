import { Link } from "react-router-dom";
import style from "./ButtonHome.module.css";
export default function ButtonHome() {
  return (
    <Link to="/menu">
      <button className={style.btn_home}>See menu</button>;
    </Link>
  );
}

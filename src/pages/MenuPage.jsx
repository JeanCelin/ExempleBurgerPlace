import MenuCard from "../components/layout/MenuCard";
import Navbar from "../components/layout/Navbar";
import style from "./MenuPage.module.css";
import Footer from "../components/layout/Footer";
import Menu from "../components/layout/Menu";

export default function MenuPage() {
  return (
    <div className={style.menuPageContainer}>
      <div className={style.menuPageContent}>
        <Navbar />
        <MenuCard />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

import TablePricesCard from "../components/layout/TablePricesCard";
import Navbar from "../components/layout/Navbar";
import style from "./MenuPage.module.css";
import Footer from "../components/layout/Footer";
import Menu from "../components/layout/Menu";

export default function MenuPage() {
  return (
    <div className={style.menuPageContainer}>
      <Navbar />
      <div className={style.menuPageContent}>
        <TablePricesCard />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

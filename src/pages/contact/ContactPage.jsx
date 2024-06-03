import { useState } from "react";
import Footer from "../../components/layout/Footer";
import Menu from "../../components/layout/Menu";
import Navbar from "../../components/layout/Navbar";
import style from "./ContactPage.module.css";
import FormContactUs from "./FormContactUs";

export default function Contact() {
  return (
    <div className={style.contactPageContainer}>
      <Navbar />
      <FormContactUs />
      <div>
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

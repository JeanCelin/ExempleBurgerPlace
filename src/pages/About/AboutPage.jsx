import Footer from "../../components/layout/Footer";
import Menu from "../../components/layout/Menu";
import Navbar from "../../components/layout/Navbar";
import style from "./AboutPage.module.css";
import presenting from "../../img/presenting.png";
import businessWoman from "../../img/businesswoman-posing-with-copy-space.jpg";
import worker from "../../img/working.jpg";
export default function AboutPage() {
  return (
    <>
      <div className={style.background}>
        <Navbar />
      </div>
      <div className={(style.aboutPageContainer, style.background)}>
        <div className={style.aboutPageContent}>
          <div className={style.aboutContainer}>
            <div className={style.aboutMessage}>
              <h1 className={style.titleMessage}>About Us At</h1>
              <p className={style.textMessage}>
                our passion for culinary arts goes beyond the simple act of
                cooking - it's a mission, a journey towards culinary excellence.
                Founded on the pillars of creativity, quality, and hospitality,
                every burger we serve tells a story of dedication and love for
                food.
              </p>
            </div>
            <img
              src={presenting}
              prop="A stylish man presenting a phrase beside him"
            />
          </div>
          <div className={style.missionContainer}>
            <div className={style.missionMessage}>
              <h1 className={style.titleMessage}>Mission</h1>
              <p className={style.textMessage}>
                Our mission is simple: to create moments of joy and connection
                through food. We aim to be more than just a burger joint - we
                aspire to be a destination where people feel welcomed, where
                every bite is an unforgettable experience. We are committed to
                providing delicious burgers made with fresh, quality ingredients
                while fostering a culture of exceptional service and social
                responsibility.
              </p>
            </div>
            <img
              className={style.fotos}
              src={businessWoman}
              prop="a business woman"
            />
          </div>
          <div className={style.ourTeamContainer}>
            <h1 className={style.titleMessage}>Our Team</h1>
            <div className={style.ourTeamCollaborator}>
              <div className={style.collaboratorPicture}>
                <img src={worker} prop="a collaborator" />
                <p>Collaborator exemple</p>
              </div>
              <div className={style.collaboratorPicture}>
                <img src={worker} prop="a collaborator" />
                <p>Collaborator exemple</p>
              </div>
              <div className={style.collaboratorPicture}>
                <img src={worker} prop="a collaborator" />
                <p>Collaborator exemple</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Menu />
          <Footer />
        </div>
      </div>
    </>
  );
}

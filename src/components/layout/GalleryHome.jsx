import img1 from "../img/gallery1.jpg";
import img2 from "../img/gallery2.jpg";
import img3 from "../img/gallery3.jpg";

import style from "./GalleryHome.module.css";

export default function GalleryHome() {
  return (
    <div className={style.GalleryContainer}>
      <img
        src={img1}
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="900"></img>
      <img
        src={img2}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"></img>
      <img
        src={img3}
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="900"></img>
    </div>
  );
}

import style from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={style.menuContainer}>
      <div>Home</div>
      <div>Menu</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
}

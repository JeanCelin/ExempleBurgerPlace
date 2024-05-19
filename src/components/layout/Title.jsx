import style from "./Title.module.css";
export default function Title(props) {
  return (
    <div className={style.title_container}>
      <h1>{props.titleMessage}</h1>
    </div>
  );
}

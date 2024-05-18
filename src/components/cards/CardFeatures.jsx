import style from "./CardFeature.module.css";

export default function CardFeatures(props) {
  return (
    <div className={style.CardContainer}>
      <h1 className={style.CardTitle}>{props.title}</h1>
      <p className={style.CardText}>{props.message}</p>
    </div>
  );
}

import style from "./FormContactUs.module.css";
export default function FormContactus() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.formContainer}>
      <h1>Contact Us</h1>
      <form className={style.form}>
        <label htmlFor="name">Insert your name</label>
        <input
          id="name"
          name="name"
          type="text"
          maxLength="36"
          required></input>
        <label htmlFor="email"> Insert your email</label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength="36"
          required></input>
        <label htmlFor="message">Write your message</label>
        <textarea
          id={style.userMessage}
          name="message"
          minLength="10"
          maxLength="600"
          required></textarea>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

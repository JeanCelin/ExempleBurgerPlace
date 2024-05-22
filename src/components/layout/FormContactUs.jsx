import style from "./FormContactUs.module.css";
import { useState } from "react";

export default function FormContactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formSuccess, setFormSuccess] = useState(true);
  const [showMsg, setShowMsg] = useState(false);
  const handleSuccess = () => {
    setFormSuccess(false);
    setShowMsg(true);
    setSuccessMsg("Message sent successfully!");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name === "") {
      setMsg("Enter your name");
    } else if (email === "") {
      setMsg("Enter a valid email");
    } else if (userMsg === "") {
      setMsg("Write your message");
    } else {
      handleSuccess();
    }
  };

  return (
    <div className={style.formContainer}>
      {formSuccess && (
        <>
          <h1>Contact Us</h1>
          <form className={style.form}>
            <label htmlFor="name">Insert your name</label>
            <input
              name="name"
              type="text"
              maxLength="36"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
            <label htmlFor="email">Insert your email</label>
            <input
              name="email"
              type="email"
              maxLength="36"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label htmlFor="message">Write your message</label>
            <textarea
              id={style.userMessage}
              name="message"
              minLength="10"
              maxLength="600"
              onChange={(e) => {
                setUserMsg(e.target.value);
              }}
              value={userMsg}
              required
            />
            <p className={style.msgError}>{msg}</p>
            <button type="submit" onClick={handleClick}>
              Submit
            </button>
          </form>
        </>
      )}
      {showMsg && <div className={style.successMsg}>{successMsg}</div>}
    </div>
  );
}

import style from "./FormContactUs.module.css";

import { useState } from "react";

export default function FormContactUs() {
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

  const handleChange = (setter, validator) => (e) => {
    const value = e.target.value;
    setter(value);
    validator(value);
  };

  const validateName = (value) => {
    if (value === "") {
      setMsg("Enter your name");
    } else {
      setMsg("");
    }
  };

  const validateEmail = (value) => {
    if (value === "") {
      setMsg("Enter a valid email");
    } else {
      setMsg("");
    }
  };

  const validateMessage = (value) => {
    if (value === "") {
      setMsg("Write your message");
    } else {
      setMsg("");
    }
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
              onChange={handleChange(setName, validateName)}
              value={name}
              required
            />
            <label htmlFor="email">Insert your email</label>
            <input
              name="email"
              type="email"
              maxLength="36"
              onChange={handleChange(setEmail, validateEmail)}
              value={email}
              required
            />
            <label htmlFor="message">Write your message</label>
            <textarea
              id={style.userMessage}
              name="message"
              minLength="10"
              maxLength="600"
              onChange={handleChange(setUserMsg, validateMessage)}
              value={userMsg}
              required
            />
            {msg && <p className={style.msgError}>{msg}</p>}
            <button type="submit" onClick={handleClick}>
              SUBMIT
            </button>
          </form>
        </>
      )}
      {showMsg && <div className={style.successMsg}>{successMsg}</div>}
    </div>
  );
}

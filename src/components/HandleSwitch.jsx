import React from "react";
import "animate.css";
import style from "./style/HandleSwitch.module.css";
import sun from "../img/sun.svg";
import moon from "../img/moon.svg";

function HandleSwitch({ checked, onChange, id }) {
  if (checked) {
    document.body.classList.add("is-light-mode");
    document.body.classList.remove("is-dark-mode");
  } else {
    document.body.classList.add("is-dark-mode");
    document.body.classList.remove("is-light-mode");
  }
  return (
    <div className={style.darkMode}>
      <input
        type="checkbox"
        className={style.checkbox}
        name="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className={style.switch} htmlFor={id}>
        Switch
      </label>
      <div className={style.sunMoon}>
        {checked && (
          <img
            src={moon}
            height={30}
            className={`${
              style.sun
            } ${"animate__animated animate__fadeInDown"}`}
            alt="moon"
          />
        )}
        {!checked && (
          <img
            src={sun}
            height={30}
            className={`${style.moon} 
            ${"animate__animated animate__fadeInUp"}`}
            alt="sun"
          />
        )}
      </div>
    </div>
  );
}

export default HandleSwitch;
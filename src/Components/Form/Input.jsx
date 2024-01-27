import React from "react";
import styles from "./Input.module.css";

export const Input = ({ label, type, name, value, error, onChange, validate, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        className={styles.input}
        type={type} 
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

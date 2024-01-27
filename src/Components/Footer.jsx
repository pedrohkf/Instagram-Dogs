import React from "react";
import styles from "./Footer.module.css";
import Dogs  from "../Assets/dogs-footer.svg?react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns Direito Reservados.</p>
    </footer>
  );
};

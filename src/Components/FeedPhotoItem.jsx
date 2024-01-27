import React from "react";
import styles from "./FeedPhotoItem.module.css";
import { Image } from "./Helper/Image";

export const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />

      <span className={styles.view}>{photo.acessos}</span>
    </li>
  );
};

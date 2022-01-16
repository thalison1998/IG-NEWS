import React from "react";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId:string;
}

export const SubscribeButton = ({priceId}:SubscribeButtonProps) => {
  return (
    <button type="button" className={styles.subScribeButton}>
      Subscribe now
    </button>
  );
};

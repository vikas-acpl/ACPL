import React from "react";
import styles from "./SuccessModal.module.css";

const SuccessModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2>Thank You</h2>
        <p>Your response has been submitted successfully!</p>
      </div>
    </div>
  );
};

export default SuccessModal;
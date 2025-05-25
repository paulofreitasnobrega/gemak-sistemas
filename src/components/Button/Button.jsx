import React from "react";
import styles from "./Button.module.css";
import "../../styles/_variables.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        ${styles.button} 
        ${styles[variant]} 
        ${disabled ? styles.disabled : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;

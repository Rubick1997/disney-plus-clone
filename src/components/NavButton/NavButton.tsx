import React from "react";
import styles from "./styles.module.css";


type NavButtonTypes = {
  name: string;
  icon: React.ReactNode;
};

function NavButton({ name, icon }: NavButtonTypes) {
  return (
    <div className={styles.container}>
      {icon}
      <span>{name}</span>
    </div>
  );
}

export default NavButton;

import { Home, Search, Add, Star, Movie, Tv } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import NavButton from "../NavButton/NavButton";
import React from "react";
import styles from "./styles.module.css";

function Header() {
  const navListItems = [
    { name: "HOME", icon: <Home style={{ fill: "white", fontSize: 20 }} /> },
    {
      name: "SEARCH",
      icon: <Search style={{ fill: "white", fontSize: 20 }} />,
    },
    {
      name: "WATCHLIST",
      icon: <Add style={{ fill: "white", fontSize: 20 }} />,
    },
    {
      name: "ORIGINALS",
      icon: <Star style={{ fill: "white", fontSize: 20 }} />,
    },
    {
      name: "MOVIES",
      icon: <Movie style={{ fill: "white", fontSize: 20 }} />,
    },
    {
      name: "SERIES",
      icon: <Tv style={{ fill: "white", fontSize: 20 }} />,
    },
  ];

  return (
    <nav className={styles.nav}>
      <img src="/img/logo.svg" alt="Disney Logo" className={styles.img} />
      <div className={styles.navMenu}>
        {navListItems.map((item) => (
          <NavButton name={item.name} icon={item.icon} />
        ))}
      </div>
      <Avatar
        alt="Eren"
        src="https://static.wikia.nocookie.net/characters/images/5/5d/Eren-Jaeger.jpg"
      />
    </nav>
  );
}

export default Header;

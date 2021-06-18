import React from "react";
import { Home, Search, Add, Star, Movie, Tv } from "@material-ui/icons";
import { Avatar, useMediaQuery } from "@material-ui/core";
import NavButton from "../NavButton/NavButton";
import DrawerComponent from "../NavButton/DrawerComponent";
import styles from "./styles.module.css";

function Header() {
  const isActive = useMediaQuery("(min-width: 800px)");
  const navStyle = { fill: isActive ? "white" : "black", fontSize: 20 };
  
  const navListItems = [
    { name: "HOME", icon: <Home style={navStyle} /> },
    {
      name: "SEARCH",
      icon: <Search style={navStyle} />,
    },
    {
      name: "WATCHLIST",
      icon: <Add style={navStyle} />,
    },
    {
      name: "ORIGINALS",
      icon: <Star style={navStyle} />,
    },
    {
      name: "MOVIES",
      icon: <Movie style={navStyle} />,
    },
    {
      name: "SERIES",
      icon: <Tv style={navStyle} />,
    },
  ];
  return (
    <nav className={styles.nav}>
      {!isActive ? (
        <div className={styles.burger}>
          <DrawerComponent navItems={navListItems} />
          <img src="/img/logo.svg" alt="Disney Logo" className={styles.img} />
        </div>
      ) : (
        <div className={styles.navMenu}>
          <img src="/img/logo.svg" alt="Disney Logo" className={styles.img} />
          {navListItems.map((item) => (
            <NavButton name={item.name} icon={item.icon} />
          ))}
        </div>
      )}
      <Avatar
        alt="Eren"
        src="https://static.wikia.nocookie.net/characters/images/5/5d/Eren-Jaeger.jpg"
      />
    </nav>
  );
}

export default Header;

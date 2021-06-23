import React, { useEffect } from "react";
import { Home, Search, Add, Star, Movie, Tv } from "@material-ui/icons";
import { Avatar, useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import NavButton from "../NavButton/NavButton";
import DrawerComponent from "../NavButton/DrawerComponent";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { UserInfo } from "../../types";
import styles from "./styles.module.css";
import { setSignOut, setUserLogin } from "../../actions";

function Header() {
  const isActive = useMediaQuery("(min-width: 800px)");
  const navStyle = { fill: isActive ? "white" : "black", fontSize: 20 };
  const user: UserInfo = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await dispatch(
          setUserLogin({
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
          })
        );
      }
      history.push("/");
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let userInfo = result.user;
      dispatch(
        setUserLogin({
          name: userInfo?.displayName,
          email: userInfo?.email,
          photo: userInfo?.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };
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
  const navbar = !isActive ? (
    <DrawerComponent navItems={navListItems} />
  ) : (
    <>
      {navListItems.map((item) => (
        <NavButton name={item.name} icon={item.icon} key={item.name} />
      ))}
    </>
  );
  return (
    <nav className={styles.nav}>
      <img src="/img/logo.svg" alt="Disney Logo" className={styles.img} />
      {user.name?.length === 0 ? (
        <div className={styles.login} onClick={signIn}>
          LOGIN
        </div>
      ) : (
        <>
          <div className={styles.navMenu}>{navbar}</div>
          { user.photo && <Avatar onClick={signOut} alt="Eren" src={user?.photo} />}
        </>
      )}
    </nav>
  );
}

export default Header;

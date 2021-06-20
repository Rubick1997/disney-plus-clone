import React from "react";
import { Button, withStyles } from "@material-ui/core";
import styles from "./styles.module.css";

const SignUpButton = withStyles({
  root: {
    width: "100%",
    backgroundColor: "#0063e5",
    fontWeight: "bold",
    padding: "17px 0",
    color: "#f9f9f9",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "8px",
    marginBottom: "12px",
    "&:hover": {
      background: "#0483ee",
    },
  },
})(Button);

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/img/cta-logo-one.svg" alt="Logo one" />
        <SignUpButton>
          <div style={{ fontSize: 18, letterSpacing: 1.5 }}>
            GEL THE DISNEY BUNDLE
          </div>
        </SignUpButton>
        <p className={styles.description}>
          Stream on 4 devices at once or download your favorites to watch later.
          With dozens of titles in stunning 4K UHD, you can watch the way you
          always wished.
        </p>
        <img
          src="/img/cta-logo-two.png"
          alt="Logo two"
          className={styles.logoTwo}
        />
      </div>
    </div>
  );
}

export default Login;

import { Button, IconButton, withStyles } from "@material-ui/core";
import { Add, People, PlayArrow } from "@material-ui/icons";
import React from "react";
import styles from "./styles.module.css";

const PlayButton = withStyles({
  root: {
    borderRadius: 4,
    fontSize: 15,
    padding: "0px 24px",
    marginRight: 22,
    height: 56,
    background: "rgb(249, 249, 249)",
    border: "none",
    letterSpacing: 1.8,
  },
})(Button);

const TrailerButton = withStyles({
  root: {
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgb(249,249,249)",
    color: "rgb(249,249,249)",
  },
})(PlayButton);

const AddButton = withStyles({
  root: {
    borderRadius: "50%",
    height: 44,
    width: 44,
    border: "2px solid white",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginRight: 16,
  },
})(IconButton);

const GroupWatchButton = withStyles({
  root: {
    background: "rgb(0, 0, 0)",
  },
})(AddButton);

function Detail() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img
          src="https://i.pinimg.com/564x/9b/a6/8c/9ba68c07c58615afe9d317ee1da07ebe.jpg"
          alt=""
        />
      </div>
      <div className={styles.imgTitle}>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6ED272C894E240FC0A78A2F4CCD568AB5F6758178B66FE1BEFB14628362D5F4/scale?width=1200&aspectRatio=1.78"
          alt=""
        />
      </div>
      <div className={styles.controls}>
        <PlayButton
          variant="contained"
          startIcon={<PlayArrow style={{ fontSize: 30 }} />}
        >
          Play
        </PlayButton>
        <TrailerButton
          variant="outlined"
          startIcon={<PlayArrow style={{ fontSize: 30, fill: "white" }} />}
        >
          Trailer
        </TrailerButton>
        <AddButton>
          <Add
            style={{
              fontSize: 25,
              color: "white",
            }}
          />
        </AddButton>
        <GroupWatchButton>
          <People
            style={{
              fontSize: 25,
              color: "white",
            }}
          />
        </GroupWatchButton>
      </div>
      <div className={styles.subTitle}>
        2018 * 7m * Action, Adventure, Science Finction, Fantasy Epic
      </div>
      <div className={styles.description}>
        Thirty years after the Galactic Civil War,the First Order has
        risen from the fallen Galactic Empire and seeks to end the New Republic.
        The Resistance, backed by the Republic and led by General Leia Organa,
        opposes the First Order. Leia searches for her brother, Luke Skywalker,
        who has gone missing.
      </div>
    </div>
  );
}

export default Detail;

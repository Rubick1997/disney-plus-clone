import React, { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { getRecommendedContent } from "../../actions";
import axios from "axios";
import styles from "./styles.module.css";

function Movies() {
  const dispatch = useDispatch()
  // const info = useSelector((state) => state.content);

  const fetchRecommended = async() => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    dispatch(getRecommendedContent(data.results))
  };
  
  useEffect(() => {
    fetchRecommended();
  }, []);
  return (
    <div className={styles.container}>
      <h4>Recommended for You</h4>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
        <div className={styles.wrap}>
          <img
            src="https://i.pinimg.com/564x/cc/1a/e7/cc1ae791fec5ea48efbc809917c77c43.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Movies;

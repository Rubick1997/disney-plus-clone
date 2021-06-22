import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getRecommendedContent } from "../../actions";
import axios from "axios";
import styles from "./styles.module.css";
import { ContentType } from "../../types";

function RecommendedConent() {
  const dispatch = useAppDispatch();
  const content: ContentType[] = useAppSelector(
    (state) => state.recommendedContent
  );

  const fetchRecommended = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(getRecommendedContent(data.results));
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

  return (
    <div className={styles.container}>
      <h4>Recommended for You</h4>
      <div className={styles.content}>
        {content &&
          content.map((item) => (
            <div className={styles.wrap} key={item.id}>
              <img
                src={
                  item.backdrop_path
                    ? `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`
                    : "https://www.movienewz.com/img/films/poster-holder.jpg"
                }
                alt={item.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecommendedConent;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import styles from "./styles.module.css";
import { ContentType } from "../../types";
import { useAppSelector } from "../../app/hooks";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const info: ContentType[] = useAppSelector(
    (state) => state.recommendedContent
  );

  return (
    <Carousel {...settings}>
      {/* {info.map((item) => (
          <div className={styles.wrap}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              alt=""
            />
          </div>
        ))} */}
      <div className={styles.wrap}>
        <img src="/img/slider-badging.jpg" alt="BadGing" />
      </div>
      <div className={styles.wrap}>
        <img src="/img/slider-badag.jpg" alt="BadGing" />
      </div>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin: 30px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

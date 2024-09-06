import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div className={css.gallaryWrap}>
      <ul className={css.gallaryList}>
        {images.map((el) => {
          return (
            <li className={css.imageCard} key={el.id}>
              <ImageCard srcSmall={el.urls.small} alt={el.alt_description} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;

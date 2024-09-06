import React from "react";
import css from "./ImageCard.module.css";


const ImageCard = ({ srcSmall, alt }) => {
  return (

      <img className={css.image}src={srcSmall} alt={alt}/>

  );
};

export default ImageCard;

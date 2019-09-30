import React, { useEffect, useState } from "react";
import cx from "classnames";

const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/`;
const API_KEY = `8m8bkcVYqxE5j0vQL2wk1bpiBGibgaqCrOvwZVyU`;

function Slideshow(props) {
  const { photos, turnOffSlideshow } = props;
  console.log("photos", photos);
  let [currentPhotoIndex, setDisplayingPhotoIndex] = useState(0);
  let [slide, setSlideMetaData] = useState();

  let slideShowGenerator;

  useEffect(() => {
    if (photos.length > 0 && currentPhotoIndex === 0) {
      slideShowGenerator = setInterval(() => {
        console.log("currentPhotoIndex");
        setSlideMetaData(photos[currentPhotoIndex]);

        console.log("slideShowGenerator currentPhotoIndex", currentPhotoIndex);
        console.log("photos.length", photos.length);

        setDisplayingPhotoIndex(currentPhotoIndex++);

        console.log("////////////////////////////////////////////");
      }, 3000);
    }
  }, [photos]);

  if (currentPhotoIndex === photos.length) {
    setDisplayingPhotoIndex(0);
    clearInterval(slideShowGenerator);
    return turnOffSlideshow();
  }

  if (slide) {
    return (
      <>
        <h2>{slide.earth_date}</h2>
        <div className="row">
          <div className="col s7">
            <img src={slide.img_src} style={{ width: "100%" }} />
          </div>
          <div className="col s5">
            <h3>Sol: {slide.sol}</h3>
            <h3>{slide.camera.full_name}</h3>
          </div>
        </div>
      </>
    );
  }

  return null;
}

export default Slideshow;

import React, { useEffect, useState } from "react";
import "./Slideshow.css";

function Slideshow(props) {
  const { photos, turnOffSlideshow } = props;
  // console.log("photos", photos);
  let [currentPhotoIndex, setDisplayingPhotoIndex] = useState(0);
  let [slide, setSlideMetaData] = useState();
  let [ioStartInterval, startInterval] = useState(false);

  let slideShowGenerator;

  function runSlideshow(photo, acc) {
    // console.log("currentPhotoIndex", photo);
    setSlideMetaData(photo);

    // console.log("slideShowGenerator currentPhotoIndex", acc);

    // console.log("currentPhotoIndex", currentPhotoIndex);
  }

  useEffect(() => {
    runSlideshow(photos[0], 0);
    setDisplayingPhotoIndex(currentPhotoIndex++);
    startInterval(true);
  }, []);

  useEffect(() => {
    if (ioStartInterval && photos.length > 0 && currentPhotoIndex === 0) {
      // console.log(
      //        "if (ioStartInterval && photos.length > 0 && currentPhotoIndex === 0)"
      //      );
      slideShowGenerator = setInterval(() => {
        runSlideshow(photos[currentPhotoIndex], currentPhotoIndex);
        setDisplayingPhotoIndex(currentPhotoIndex++);
        // console.log("photos.length", photos.length);
        // console.log("////////////////////////////////////////////");
      }, 3000);
    }
  }, [photos, ioStartInterval]);

  if (currentPhotoIndex === photos.length) {
    setDisplayingPhotoIndex(0);
    clearInterval(slideShowGenerator);
    return turnOffSlideshow();
  }

  if (slide) {
    return (
      <div className="row slideshow-container">
        <div className="col s7 image-wrapper valign-wrapper">
          <img src={slide.img_src} style={{ width: "100%" }} />
        </div>
        <div className="col s5 fieldCollection-container">
          <div className="fieldCollection-wrapper valign-wrapper">
            <div className="field-wrapper">
              <p className="field">Earth Date</p>
              <p className="value">{slide.earth_date}</p>
            </div>
            <div className="field-wrapper">
              <p className="field">Sol Date</p>
              <p className="value">{slide.sol}</p>
            </div>
            <div className="field-wrapper">
              <p className="field">Location</p>
              <p className="value">Mars</p>
            </div>
            <div className="field-wrapper">
              <p className="field">Rover</p>
              <p className="value">Curiosity</p>
            </div>
            <div className="field-wrapper">
              <p className="field">Camera</p>
              <p className="value">{slide.camera.full_name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Slideshow;

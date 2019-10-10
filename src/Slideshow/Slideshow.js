import React, { useEffect, useState } from "react";
import "./Slideshow.css";

function Slideshow(props) {
  const { photos, turnOffSlideshow } = props;
  // //console.log("photos", photos);
  let [currentPhotoIndex, setDisplayingPhotoIndex] = useState(0);
  let [slide, setSlideMetaData] = useState({
    img_src: "",
    earth_date: "",
    sol: "",
    camera: {
      full_name: ""
    }
  });
  let [ioStartInterval, startInterval] = useState(false);

  let slideShowGenerator;

  function runSlideshow(photo, acc) {
    //console.log("currentPhotoIndex", photo);
    setSlideMetaData(photo);

    //console.log("slideShowGenerator currentPhotoIndex", acc);

    //console.log("currentPhotoIndex", currentPhotoIndex);
  }

  useEffect(() => {
    runSlideshow(photos[0], 0);
    setDisplayingPhotoIndex(currentPhotoIndex++);
    startInterval(true);
  }, []);

  useEffect(() => {
    if (ioStartInterval && photos.length > 0 && currentPhotoIndex === 0) {
      //console.log(
      //"if (ioStartInterval && photos.length > 0 && currentPhotoIndex === 0)"
      //);
      slideShowGenerator = setInterval(() => {
        if (currentPhotoIndex <= photos.length) {
          runSlideshow(photos[currentPhotoIndex], currentPhotoIndex);
          setDisplayingPhotoIndex(currentPhotoIndex++);
          //console.log("photos.length", photos.length);
          //console.log("////////////////////////////////////////////");
        }
      }, 3500);
    }
  }, [photos, ioStartInterval]);

  if (currentPhotoIndex === photos.length) {
    setDisplayingPhotoIndex(0);
    clearInterval(slideShowGenerator);
    return turnOffSlideshow();
  }

  return (
    <div className="row slideshow-container">
      <div className="col s7 image-wrapper valign-wrapper">
        {slide &&
          photos.map((photo, i) => (
            <div
              className="slideshow-image"
              style={{
                backgroundImage: `url(${photo.img_src})`,
                opacity: currentPhotoIndex === i ? 1 : 0,
                transition: "opacity 0.35 ease"
              }}
            />
          ))}
      </div>
      <div className="col s5 fieldCollection-container">
        <div className="fieldCollection-wrapper valign-wrapper">
          <div className="field-wrapper">
            <p className="field">Earth Date</p>
            <p className="value">{slide ? slide.earth_date : ""}</p>
          </div>
          <div className="field-wrapper">
            <p className="field">Sol Date</p>
            <p className="value">{slide ? slide.sol : ""}</p>
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
            <p className="value">{slide ? slide.camera.full_name : ""}</p>
          </div>
          <div className="field-wrapper">
            <p className="field">Photo ID</p>
            <p className="value">{slide ? slide.id : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;

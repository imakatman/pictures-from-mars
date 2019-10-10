import React, { useEffect, useState } from "react";
import "./App.css";
import Slideshow from "./Slideshow/Slideshow";

const baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
const API_KEY = "8m8bkcVYqxE5j0vQL2wk1bpiBGibgaqCrOvwZVyU";

function App() {
  let [solToDisplay, setSolToDisplay] = useState();
  let [photos, setPhotos] = useState([]);
  let [io, turnOnSlideshow] = useState();

  useEffect(() => {
    fetch(`${baseUrl}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        const maxSol = json.rovers[0].max_sol;
        // console.log("maxSol", maxSol);
        return setSolToDisplay(maxSol);
      })
      .catch(err => err.message);
  }, []);

  useEffect(() => {
    // console.log("solToDisplay", solToDisplay);
    if (solToDisplay) {
      fetch(
        `${baseUrl}/curiosity/photos?api_key=${API_KEY}&sol=${solToDisplay}`
      )
        .then(response => response.json())
        .then(json => {
          const nonMastPhotos = json.photos.filter(
            photo => photo.camera.name !== "MAST"
          );
          setPhotos(nonMastPhotos);
          turnOnSlideshow(true);
        })
        .catch(err => err.message);
      //console.log("////////////////////////////////////////////");
    }
  }, [solToDisplay]);

  useEffect(() => {
    if (io === false) {
      const previousSol = Number(solToDisplay) - 1;
      setSolToDisplay(previousSol);
      //console.log("////////////////////////////////////////////");
    }
  }, [io]);

  return (
    <div className="container valign-wrapper">
      <div className="row App-slideshow-container">
        {io && (
          <Slideshow
            photos={photos}
            turnOffSlideshow={() => turnOnSlideshow(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;

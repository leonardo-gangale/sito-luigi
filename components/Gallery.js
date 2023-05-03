import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import classes from "./Gallery.module.css";

export default function Gallery() {
  const [imagesLink, setImagesLink] = useState(["https://imgur.com/JGKtscn.jpg", "https://imgur.com/TX7YjZX.jpg", "https://imgur.com/NZvzqk0.jpg", "https://imgur.com/Znme9GX.jpg"]);
  const [currentImg, setCurrentImg] = useState(0);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir == "Right") {
        handleGalleryBackwards();
      } else if (eventData.dir == "Left") {
        handleGalleryForward();
      }
    },
  });

  function handleGalleryForward() {
    setCurrentImg((currentImg + 1) % imagesLink.length);
  }

  function handleGalleryBackwards() {
    if (currentImg - 1 >= 0) {
      setCurrentImg(currentImg - 1);
    } else {
      setCurrentImg(imagesLink.length - 1);
    }
  }

  return (
    <div className={classes.galleryContainer}>
      <div className={classes.gallery}>
        <button className={classes.galleryBtnLeft} onClick={handleGalleryBackwards}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <img className={classes.imageForGallery} src={imagesLink[currentImg]} alt="three image not found :(" {...handlers} />
        <button className={classes.galleryBtnRight} onClick={handleGalleryForward}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <p className={classes.text}>
        {currentImg + 1}/{imagesLink.length}
      </p>
    </div>
  );
}

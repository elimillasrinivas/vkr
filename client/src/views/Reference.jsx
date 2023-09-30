import React, { useState, useEffect } from "react";
import { referenceTitle, referenceSubtitle } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import imageOne from "../assets/img1.png";
import imageTwo from "../assets/img2.png";
import imageThree from "../assets/img3.png";
import imageFour from "../assets/img4.png";
import imageFive from "../assets/img5.png";
import imageSix from "../assets/img6.png";
import imageSeven from "../assets/img7.png";
import imageEight from "../assets/img8.png";
import imageNine from "../assets/img9.png";
import imageTen from "../assets/img10.png";
import image11 from "../assets/img11.png";
import image12 from "../assets/img12.png";
import image13 from "../assets/img13.png";
import image14 from "../assets/img14.png";
import image15 from "../assets/img15.png";
import image16 from "../assets/img16.png";
import image17 from "../assets/img17.png";
import image18 from "../assets/img18.jpg";
import image19 from "../assets/img19.jpg";
import image20 from "../assets/img20.jpg";
import image21 from "../assets/img21.jpg";
import image22 from "../assets/img22.jpg";
import image23 from "../assets/img23.jpg";
import image24 from "../assets/img24.jpg";
import image25 from "../assets/img25.jpg";
import image26 from "../assets/img26.jpg";
import image27 from "../assets/img27.jpg";
import image28 from "../assets/img28.jpg";
import image29 from "../assets/img29.jpg";
import image30 from "../assets/img30.jpg";
import image31 from "../assets/img31.jpg";
import image32 from "../assets/img32.jpg";
import image33 from "../assets/img33.jpg";
import image34 from "../assets/img34.jpg";
import image35 from "../assets/img35.jpg";
import FadeIn from "../components/FadeIn";

import '../styles/reference.css'

const Reference = () => {
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
    imageNine,
    imageTen,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through images
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to automatically switch images every 5 seconds
    const interval = setInterval(nextImage, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      id="gallery"
      className="mx-auto mt-10"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      <div className="relative text-center images-div">
        <FadeIn delay={0.2} direction="right">
          <div
            
          >
            <img
              src={images[currentImageIndex]}
              alt=""
              className="image-tag"
            />
          </div>
        </FadeIn>
        <div className="absolute left-0 right-0">
          <button
            onClick={handlePrevClick}
            className="text-3xl text-black hover:text-orange-300"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNextClick}
            className="text-3xl text-black hover:text-orange-300 ml-4"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reference;

import React, { useState, useEffect } from 'react';
import { referenceTitle, referenceSubtitle } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
import FadeIn from "../components/FadeIn";

const Reference = () => {
  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight, imageNine, imageTen, image11, image12, image13, image14, image15, image16, image17];
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
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="gallery" className="mb-[160px] px-10 max-w-[1490px] mx-auto mt-10">
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

      <div className="relative text-center">
        <FadeIn delay={0.2} direction="right">
          <div className="flex justify-center">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="w-100 h-100 object-cover"
            />
          </div>
        </FadeIn>
        
        <div className="absolute left-0 right-0 bottom-4">
          <button
            onClick={handlePrevClick}
            className="text-3xl text-gray-300 hover:text-orange-300"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNextClick}
            className="text-3xl text-gray-300 hover:text-orange-300 ml-4"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reference;

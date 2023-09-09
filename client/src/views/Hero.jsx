// React
import { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.png";
import logo from "../assets/logo.png";
import mapIcon from "../assets/map.png";
import fbIcon from "../assets/facebook.png";
import instaIcon from "../assets/instagram.png";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative w-full max-w-[1490px] flex 
        items-center justify-between pt-10 mx-auto px-10"
      >
        <img src={logo} alt="" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="gallery">Gallery</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Projects</NavLink>
          <NavLink to="care">Contact</NavLink>
        </ul>

        <a href="https://goo.gl/maps/hWuCjiWtG8Y7xjDn7">
          <img
            src={mapIcon}
            className="hidden md:block cursor-pointer"
            alt="map"
            width={50}
          />
        </a>
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="gallery" mobileMenu>
            Gallery
            </NavLink>
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
            Projects
            </NavLink>
            <NavLink to="care" mobileMenu>
            Contact
            </NavLink>
          </ul>

          {/* <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" /> */}
        </div>
      </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
          {heroSubtitle}
        </h5>
      </FadeIn>

      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="flex justify-center items-center mt-11">
          <a href="https://www.facebook.com/VKREVNTS/">
            <img src={fbIcon} alt="fb" className="h-11 w-11 cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-center items-center mt-11 ml-3">
          <a href="https://instagram.com/vkr_birthday_event?igshid=MzRlODBiNWFlZA==">
            <img
              src={instaIcon}
              alt="insta"
              className="h-11 w-11 cursor-pointer"
            />
          </a>
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;

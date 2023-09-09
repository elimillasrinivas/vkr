import React from 'react';
import logo from "../assets/logo.png";

//assets
import productOneIcon from "../assets/img16.png";
import productTwoIcon from "../assets/img1.png";
import productThreeIcon from "../assets/img10.png";

const projects = [
  {
    title: `SHLOKA's Spectacular Birthday Bash by VKR Birthday Event Planners`,
    imageSrc: `${productOneIcon}`,
    description:
      `Experience a birthday extravaganza like no other with VKR Birthday Event Planners. We're thrilled to present "SIAN's Spectacular Birthday Bash," where creativity knows no bounds. From enchanting themes to mesmerizing entertainment, we'll ensure SIAN's special day is filled with joy and wonder. Explore our magical offerings and create unforgettable memories with us.`,
  },
  {
    title: `THANVI's Enchanted Birthday Wonderland by VKR Birthday Event Planners`,
    imageSrc: `${productTwoIcon}`,
    description:
      `Step into a world of enchantment with "ISHANVI's Enchanted Birthday Wonderland" by VKR Birthday Event Planners. Our team specializes in crafting dreamlike themes that will transport your child to a magical realm. With delightful entertainment and delightful treats like chocolate fountains and popcorn, ISHANVI's birthday will be an enchanting celebration to remember.`,
  },
  {
    title: `ADHYA's Thrilling Birthday Adventure with VKR Birthday Event Planners`,
    imageSrc: `${productThreeIcon}`,
    description:
      `Get ready for an adrenaline-pumping celebration with "AGASTHYA's Thrilling Birthday Adventure" by VKR Birthday Event Planners. From exciting games and rides like bull rides and train adventures to jaw-dropping magic shows, we guarantee non-stop fun and excitement. Join us for AGASTHYA's birthday, where adventure awaits around every corner.`,
  },
];

const ProductDetails = () => {
  
  return (
    <>
      <div
      className="flex  items-center p-3"
      style={{background: 'black'}}
    >
      <div
        className="flex 
        items-center pt-10 mx-auto px-10"
      >
        <a href="/">
        <img src={logo} alt="logo" />
        </a>
      </div>
      </div>
      <h3 style={{textAlign:"center", fontSize:"50px", marginTop:"1rem"}}>Successful Events</h3>
    <div className="space-y-4 p-10 mt-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <img
            src={project.imageSrc}
            alt={`Project ${index + 1}`}
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductDetails;

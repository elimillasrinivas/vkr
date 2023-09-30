import React, { useState } from "react";
import { services } from "../data";
import FadeIn from "../components/FadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/services.css";
import whatsappIcon from "../assets/whatsapp.png";

const Services = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const toggleService = (index) => {
    if (openServiceIndex === index) {
      setOpenServiceIndex(null);
    } else {
      setOpenServiceIndex(index);
    }
  };

  return (
    <div id="services">
      <h3 className="services-title text-center py-4">Our Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 m-4">
        {services.map((service, index) => (
          <FadeIn key={index} delay={0.2} direction="down">
            <div className="custom-service p-4">
              <div className="custom-service-header flex justify-between items-center cursor-pointer" onClick={() => toggleService(index)}>
                <h3 className="custom-service-title text-2xl font-medium text-black">
                  {service.title}
                </h3>
                <FontAwesomeIcon
                  icon={openServiceIndex === index ? faChevronDown : faArrowRight}
                  size="lg"
                  className="ml-3"
                />
              </div>
              {openServiceIndex === index && (
                <ul className="custom-service-points text-left text-gray-600 mt-3">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="py-2">
                      <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="mb-2">For more information, click here to chat on WhatsApp:</p>
        <a href="https://wa.me/8639552901">
          <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 inline-block" />
        </a>
      </div>
    </div>
  );
};

export default Services;

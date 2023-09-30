// local imports
import {
  footerLinksColumnOne,
  footerLinksColumnTwo,
  footerLinksColumnThree,
  newsletter,
} from "../data";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(133deg,_#566270_0%,_#283444_100%)]">
      <div className="max-w-[1490px] mx-auto px-10 py-[120px]">
        <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-12">
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
            <h2 className="text-white text-center xl:text-start font-medium text-3xl lg:text-[32px]">
              {newsletter}
            </h2>
            <div className="relative w-full xs:w-[380px] xl:w-[320px] mt-11">
              <form action="https://formspree.io/f/mqkvboqn" method="POST">
                <input
                  type="email"
                  name='email'
                  placeholder="Email"
                  className="rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-white text-base
                  xs:text-lg placeholder-white"
                />
                <button
                  className="absolute top-2/4 -translate-y-2/4 right-3 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] px-6 py-2.5 rounded-full
                cursor-pointer text-white" type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 w-full">
            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnOne.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    <div className="w-full flex mx-auto justify-center xl:justify-start">
                      <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                        <a href="#services">Services</a>
                      </li>
                    </div>

                    <div className="w-full flex mx-auto justify-center xl:justify-start">
                      <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                        <a href="#gallery">Gallery</a>
                      </li>
                    </div>

                    <div className="w-full flex mx-auto justify-center xl:justify-start">
                      <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                        <a href="#products">Projects</a>
                      </li>
                    </div>
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnTwo.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="w-full flex mx-auto justify-center xl:justify-start"
                      >
                        <li
                          className={`font-medium text-sm md:text-base ${
                            index !== 1 && "cursor-pointer"
                          } text-center xl:text-start w-fit`}
                        >
                          <a href={`${link.split(" ")[1]}`}>
                            {link.split(" ")[0]}
                          </a>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnThree.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="w-full flex mx-auto justify-center xl:justify-start"
                      >
                        <li
                          className={`font-medium text-sm md:text-base ${
                            index !== 1 && "cursor-pointer"
                          } text-center xl:text-start w-fit`}
                        >
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white my-12" />

        <h6 className="text-white text-center text-base lg:text-lg">
          &copy; VKR - All rights reserved <br />
          developed by <a href="https://srinivaselimilla.tech/" class="d-flex hover:text-orange-300">Srinivas Elimilla <span style={{color:"orange", fontSize:"12.5px",letterSpacing:"1px"}}>(click here)</span></a>
          
        </h6>
      </div>
    </div>
  );
};

export default Footer;

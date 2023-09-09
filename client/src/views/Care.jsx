// local imports
import { careTitle, careSubtitle, careList } from "../data";
import imageFour from "../assets/contact.jpg";
import FadeIn from "../components/FadeIn";

const Care = () => {
  return (
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px] mt-5">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {careTitle}
        </h1>
      </FadeIn>

      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
          {careSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-8 items-start">
          {careList.map((item, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.2} direction="left">
              <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                <a href={`${item.link}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[70px] w-[70px] mt-10"
                />
                </a>
                
                <div>
                  <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium mt-10">
                    {item.title}
                  </h3>
                  <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium mt-3">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} direction="right">
          <img src={imageFour} alt="plants" width={900}/>
        </FadeIn>
      </div>
    </div>
  );
};

export default Care;

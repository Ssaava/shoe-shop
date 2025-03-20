import backgroundImage from "/images/bg-shoes-image.jpg";
import speed from "/images/speed.jpg";
import quality from "/images/quality.jpg";
import comfort from "/images/comfort.jpg";
import Services from "@/components/user-components/Services.tsx";
import { shadowBackground } from "@/assets/utils.tsx";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import ShopNowButton from "@/components/ShopNowButton";
const About = () => {
  return (
    <>
      <div>
        <div className={"inline-padding lg:mt-20 sm:mt-16 mt-6"}>
          <h2
            className={
              "text-5xl text-center md:text-left md:text-9xl text-secondary font-extrabold"
            }
          >
            Know Us More
          </h2>
          <h3
            className={
              "text-gray-8 text-center md:text-left text-3xl md:text-7xl font-extrabold"
            }
          >
            About Us
          </h3>
        </div>
        <div className={"bg-gray-2 inline-padding mt-24 pb-8"}>
          <div className={"relative rounded-lg w-full"}>
            <img
              className={"block rounded-lg max-h-[33.5rem] w-full object-cover"}
              src={backgroundImage}
              alt={"Background Image"}
            />
            <div
              className={
                "absolute top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"
              }
            >
              <div className={"mt-auto"}>
                <p className={"text-white sm:text-6xl text-2xl font-extrabold"}>
                  Helping Your Keep Fit
                </p>
                <p className={"text-white sm:text-4xl text-lg font-extrabold"}>
                  Since 2016
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pt-10 pb-4 mt-10 md:mt-24"
            }
          >
            <Services number={"01"} title={"Research"} />
            <Services number={"02"} title={"Idea & Concept"} />
            <Services number={"03"} title={"Design & Production"} />
            <Services number={"04"} title={"Sales & Support"} />
          </div>
        </div>

        {/**/}
        <div
          className={
            "inline-padding section bg-[#F2F4F6] pb-16 sm:pb-20 md:py-24 lg:pb-32 flex flex-col gap-8 mad:gap-10 lg:gap-14"
          }
        >
          <h3
            className={"sm:w-fit sm:mx-auto text-lg md:text-3xl font-extrabold"}
          >
            History
          </h3>
          <h2 className={"w-fit mx-auto text-4xl md:text-6xl font-extrabold"}>
            Sed non mauris vitae erat consequat
          </h2>
          <p
            className={
              "sm:w-fit sm:mx-auto text-justify md:text-center max-w-[70rem]"
            }
          >
            There are many variations of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. Nam nec
            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
            erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Mauris
            in erat justo.{" "}
          </p>
          <Link
            to={"#"}
            className={
              "rounded-3xl bg-white shadow-lg text-gray-8 px-6 py-3 w-fit mt-auto sm:mx-auto font-light flex items-center gap-4 hover:bg-green-5 hover:text-white duration-300"
            }
          >
            <FaArrowRight />
            Know More
          </Link>
        </div>
        {/**/}

        <div className={"grid md:grid-cols-3"}>
          <div className={"relative max-h-[46rem] h-full"}>
            <img
              className={"block w-full h-full object-cover"}
              src={speed}
              alt={"Background Image"}
            />
            <div
              style={shadowBackground}
              className={
                "absolute bg-bottom-shadow top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"
              }
            >
              <div className={"mt-auto"}>
                <p
                  className={
                    "text-white text-5xl lg:text-6xl font-extrabold w-fit mx-auto"
                  }
                >
                  Speed
                </p>
              </div>
            </div>
          </div>
          <div className={"relative max-h-[46rem] h-full"}>
            <img
              className={"block w-full h-full object-cover"}
              src={quality}
              alt={"Background Image"}
            />
            <div
              style={shadowBackground}
              className={
                "absolute bg-bottom-shadow top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"
              }
            >
              <div className={"mt-auto"}>
                <p
                  className={
                    "text-white text-5xl lg:text-6xl font-extrabold w-fit mx-auto"
                  }
                >
                  Quality
                </p>
              </div>
            </div>
          </div>
          <div className={"relative max-h-[46rem] h-full"}>
            <img
              className={"block w-full h-full object-cover"}
              src={comfort}
              alt={"Background Image"}
            />
            <div
              style={shadowBackground}
              className={
                "absolute bg-bottom-shadow top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"
              }
            >
              <div className={"mt-auto"}>
                <p
                  className={
                    "text-white text-5xl lg:text-6xl font-extrabold w-fit mx-auto"
                  }
                >
                  Comfort
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            "inline-padding section bg-gray-2 py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col gap-8 mad:gap-10 lg:gap-14"
          }
        >
          <h3
            className={"sm:w-fit sm:mx-auto text-lg md:text-3xl font-extrabold"}
          >
            Limited Stock Available!
          </h3>
          <h2 className={"w-fit mx-auto text-4xl md:text-6xl font-extrabold"}>
            AirPro X3. Turbocharged.
          </h2>
          <p className={"sm:w-fit sm:mx-auto text-justify max-w-[45rem]"}>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo.{" "}
          </p>
          <ShopNowButton title="SHOP NOW" className="shadow-xl shadow-white" />
        </div>
      </div>
    </>
  );
};

export default About;

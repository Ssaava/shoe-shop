import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import shoes from "/images/sports-shoe4.png";
import bgImageRunning from "/background-images/bg-static-running.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Services from "@/components/user-components/Services.tsx";
import ProductSlider from "@/components/user-components/ProductSlider.tsx";
import { products } from "@/assets/data.ts";

const UserHome = () => {
  return (
    <>
      <div>
        {/*hero section*/}
        <div
          className={
            "hero-bg relative md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col"
          }
        >
          <div className={"p-4 mt-16 z-10"} style={{ filter: "unset" }}>
            <h2
              className={
                "text-5xl sm:text-7xl lg:text-9xl w-fit font-extrabold mx-auto text-white text-shadow"
              }
            >
              AIR PRO X3
            </h2>
            <img
              src={shoes}
              alt={"Boots"}
              style={{ filter: "unset" }}
              className={"mx-auto block w-auto max-h-[50rem] h-full"}
            />
          </div>
          <Link
            to={"shop"}
            reloadDocument
            className={
              "z-10 rounded-3xl bg-primary shadow-2xl text-white font-medium px-6 py-3 w-fit mt-auto mx-auto flex items-center gap-4 hover:bg-green-5 hover:text-white duration-300"
            }
          >
            <FaArrowRight />
            SHOP COLLECTION
          </Link>
        </div>
        {/*Products section*/}
        <div
          className={"w-screen section inline-padding pt-8 py-16 bg-background"}
        >
          <div className={"p-4"}>
            <h2
              className={
                "text-secondary text-3xl sm:text-7xl lg:text-9xl w-fit font-extrabold mx-auto capitalize italic"
              }
            >
              UNBELIEVABLE
            </h2>
            <p
              className={
                "text-2xl sm:text-3xl lg:text-4xl font-medium w-fit mx-auto italic capitalize mt-8"
              }
            >
              SPEED.COMFORT.
            </p>
          </div>
          <div className={"w-full mt-20"}>
            <ProductSlider />
          </div>
        </div>
        <div className={"w-screen section inline-padding pt-8 py-16 bg-gray-2"}>
          <div className={"py-16 grid md:grid-cols-2 md:gap-6 lg:gap-12"}>
            <Carousel className={"overflow-hidden sm:overflow-auto"}>
              <CarouselContent>
                {products.slice(0, 5).map(({ id, image, name }) => (
                  <CarouselItem key={id}>
                    <img src={image} alt={name} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={"left-0 "} />
              <CarouselNext className={"right-0"} />
            </Carousel>

            <div className={"w-full vertical-spacing gap-6 p-4"}>
              <h3 className={"text-2xl text-secondary font-medium"}>
                Limited Stock Available
              </h3>
              <h2 className={"text-6xl font-extrabold"}>AirPro X2</h2>
              <p className={"text-justify"}>
                Consectetur adipiscing elit elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapib weoe Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.{" "}
              </p>
              <Link
                to={"shop"}
                className={
                  "rounded-3xl bg-primary shadow-lg text-white px-6 py-3 w-fit mt-auto font-medium flex items-center gap-4 hover:bg-green-5 hover:text-white duration-300"
                }
              >
                SHOP NOW <FaArrowRight />
              </Link>
            </div>
          </div>

          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 md:py-20 sm:py-10 py-4"
            }
          >
            <Services number={"01"} title={"Research"} />
            <Services number={"02"} title={"Idea & Concept"} />
            <Services number={"03"} title={"Design & Production"} />
            <Services number={"04"} title={"Sales & Support"} />
          </div>
        </div>
        <div
          className={
            "inline-padding section bg-[rgba(0,0,0,.5)] py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col gap-8 mad:gap-10 lg:gap-16"
          }
        >
          <h3 className={"sm:w-fit sm:mx-auto text-white text-3xl font-medium"}>
            Limited Stock Available!
          </h3>
          <h2 className={"w-fit mx-auto text-white text-5xl font-extrabold"}>
            AirPro X3. Turbocharged.
          </h2>
          <p
            className={
              "sm:w-fit sm:mx-auto text-justify text-white max-w-[45rem]"
            }
          >
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo.{" "}
          </p>
          <Link
            to={"shop"}
            className={
              "rounded-3xl bg-primary text-white px-6 py-3 w-fit mt-auto sm:mx-auto font-medium flex items-center gap-4 hover:bg-green-5 hover:text-white duration-300"
            }
          >
            SHOP NOW
            <FaArrowRight />
          </Link>
        </div>
        <div className={"fixed top-0 left-0 w-full -z-20 h-screen"}>
          <img
            src={bgImageRunning}
            alt={"Static bg image"}
            className={"w-full h-full object-cover"}
          />
        </div>
      </div>
    </>
  );
};

export default UserHome;

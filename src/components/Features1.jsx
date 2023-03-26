import { motion } from "framer-motion";
import bulb from "../assets/images/3d_icons/bulb-iso-premium.png";
import calculator from "../assets/images/3d_icons/calculator-iso-premium.png";
import chart from "../assets/images/3d_icons/chart-iso-premium.png";
import dollar from "../assets/images/3d_icons/dollar-iso-premium.png";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                Powered by ChatGPT
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Unlike any tool you used before
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                As one of the first plugins for ChatGPT, we are able to provide
                you with a tool that is unlike any other. We are constantly
                improving our tool to provide you with the best experience.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Pulls data from Wallstreetbets</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Powered By AI</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Gives you ideas</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <motion.img
                  src={bulb}
                  alt="f1"
                  className="rounded-xl y mx-auto sm:mx-unset"
                  loading="lazy"
                  whileHover={{ scale: 1.1, rotate: [-5, 5, -5, 0, -5] }}
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <motion.img
                  src={calculator}
                  alt="f2"
                  className="rounded-xl y mx-auto sm:mx-unset"
                  loading="lazy"
                  whileHover={{ scale: 1.1, rotate: [-5, 5, -5, 0, -5] }}
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <motion.img
                  src={chart}
                  alt="f3"
                  className="rounded-xl y"
                  loading="lazy"
                  whileHover={{ scale: 1.1, rotate: [-5, 5, -5, 0, -5] }}
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <motion.img
                  src={dollar}
                  alt="f4"
                  className="rounded-xl y"
                  loading="lazy"
                  whileHover={{ scale: 1.1, rotate: [-5, 5, -5, 0, -5] }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

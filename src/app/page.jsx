"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="lg:w-1/2 relative w-full">
          <div className="h-[50vh] lg:h-600 md:h-[450px] sm:h-[350px]">
            <Image src="/hero.png" alt="" layout="fill" objectFit="contain" />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-8 items-left justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Digital Designer &amp; Front-End Developer
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hello! I'm Elijah Chan, a digital designer and front-end developer
            graduated from BCIT. I specialize in creating beautiful and
            functional websites and applications. I built this portfolio to
            showcase my work and skills. Feel free to take a look around!
          </p>
          <div className="md:text-sm italic">(still a W.I.P)</div>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <a href="/portfolio">View My Work</a>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <a href="/contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

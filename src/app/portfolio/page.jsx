"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "New Habits",
    desc: "New Habits is a app that helps people identify drug addiction for themselves or their loved ones. It will ask multiple questions to determine if the user is addicted to drugs and the severity level.",
    img: "/NewHabits.png",
    link: "https://www.figma.com/proto/jwQtp1e8FBRAKCCgcckOVG/Baja-Design?type=design&node-id=246-29&t=HTH3VeL2Nk4iXiBh-1&scaling=scale-down&page-id=243%3A29&starting-point-node-id=246%3A29&mode=design",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Keyboard Animation",
    desc: "This is a short 1 minute animation created in After Effects. The animation goes through different parts of a keyboard and what each part does.",
    img: "/Keyboard.png",
    link: "https://youtu.be/Ctij7ozbGL8",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Cocoon web-app",
    desc: "Cocoon is a AI powered website that scans peoples resume and displays what are the skills they have and are missing for the job they are applying for.",
    img: "/Cocoon.png",
    link: "https://cocoon-one.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Tiny Paws",
    desc: "Tinypaws is a cat adoption website aimed to help people find their perfect cat. With bringing light to neglected cats in mind",
    img: "/tinypaws/4.png",
    link: "https://www.figma.com/proto/RhxeuuIO366EJiKVQJbZMJ/tinypaws---purradise?type=design&node-id=265-5512&t=KevRorScvSlb8S9x-0&scaling=min-zoom&page-id=265%3A3056&starting-point-node-id=265%3A5512&show-proto-sidebar=1",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-start" target="_blank">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer & UX/UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

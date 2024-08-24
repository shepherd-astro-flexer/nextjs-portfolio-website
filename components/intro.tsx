"use client";

import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-left sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: "0.2",
            }}
          >
            <Image
              src="/Astro.jpg"
              alt="Astro portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            ></Image>
          </motion.div>

          <motion.span
            className="absolute bottom-0 left-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Image
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
              alt="👋"
              width="42"
              height="42"
            />
            {/* 👋 */}
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I'm Astro.</span> I'm an aspiring{" "}
        <span className="font-bold">software developer</span> ready to hone my
        skills and experience. I enjoy building{" "}
        <span className="italic">sites & apps</span> with{" "}
        <span className="underline">user-friendly</span> and{" "}
        <span className="underline">visually appealing UI.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-950 text-white px-7 py-3 items-center gap-2 rounded-full flex outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="dark:bg-white/10 group bg-white px-7 py-3 items-center gap-2 rounded-full flex outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack"
          href="/shepherd_astro_resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/shepherd-astro-flexer/"
          target="_blank"
          className="dark:bg-white/10 dark:text-white/60 dark:hover:text-white bg-white text-gray-700 p-4 items-center gap-2 rounded-full flex focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/shepherd-astro-flexer"
          target="_blank"
          className="dark:bg-white/10 dark:text-white/60 dark:hover:text-white bg-white text-gray-700 p-4 items-center gap-2 rounded-full flex text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

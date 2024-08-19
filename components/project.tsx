"use client";

import Image from "next/image";
import { projectsData } from "@/lib/data";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  hostUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a href={hostUrl} target="_blank">
        <section className="dark:bg-white/10 dark:hover:bg-white/20 bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg">
          <div className="flex flex-col py-4 px-5 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="dark:text-white/70 mt-2 leading-relaxed text-gray-700">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="dark:text-white/70 bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 
        group-hover:translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2
        
        group-hover:scale-[1.04] 
        transition hidden sm:block"
            src={imageUrl}
            alt="Projects I worked on"
            quality={95}
          />
        </section>
      </a>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[50rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate and driven software developer with a bachelor's degree
        in <span className="font-medium">Information Technology</span>, and I am
        ready to tackle new challenges in my professional journey.{" "}
        <span className="italic">My favorite part of programming</span> is the
        blending of creative and analytical minds. I love bringing my creative
        side to seemingly straightforward, qualitative problems. Lately, I've
        been working in and learning{" "}
        <span className="font-medium">React, Next.js, TypeScript</span>, and I'm
        always looking to learn new technologies. I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer, with a focus on specializing in full-stack development.
      </p>
      <p>
        <span className="italic">Apart from my professional life</span>, I have
        a passion for bodybuilding along with my brothers. This shared passion
        inspired us to build our own gym in 2022, which we successfully opened
        in 2023. This passion has greatly influenced my approach to software
        development. Just as in bodybuilding, where discipline, consistency, and
        a commitment to continuous improvement are key to success, I bring the
        same mindset to my work in tech. Bodybuilding has taught me the
        importance of setting goals, pushing boundaries, and embracing the
        grind—qualities that are essential in coding and building robust
        applications.
      </p>
    </motion.section>
  );
}

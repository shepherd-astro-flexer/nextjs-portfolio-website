"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import TimelineElement from "./timelineElement";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/themeContext";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return <TimelineElement theme={theme} key={index} item={item} />;
        })}
      </VerticalTimeline>
    </section>
  );
}

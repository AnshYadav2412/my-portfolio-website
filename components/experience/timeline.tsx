"use client";

import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { ExperienceInterface } from "@/config/experience";
import ExperienceCard from "./experience-card";

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto w-full">
      {experiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <ExperienceCard experience={experience} />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Timeline;

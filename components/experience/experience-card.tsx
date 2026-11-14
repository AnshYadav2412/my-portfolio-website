"use client";

import React from "react";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-background p-6 sm:p-8 transition-all hover:border-primary/40 hover:shadow-md space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-4 border-b">
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
              {experience.position}
            </h3>
            {experience.companyUrl && (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label={`Visit ${experience.company} website`}
              >
                <Icons.externalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-muted-foreground">
            <span className="font-semibold text-foreground">{experience.company}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            {getDurationText(experience.startDate, experience.endDate)}
          </span>
        </div>
      </div>

      {/* Program Overview & Academic Focus */}
      <div className="space-y-3">
        <h4 className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
          Overview &amp; Academic Focus
        </h4>
        <ul className="space-y-2.5">
          {experience.description.map((item, idx) => (
            <li
              key={idx}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed flex items-start gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Highlights / Achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="space-y-3 pt-2">
          <h4 className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
            Key Highlights
          </h4>
          <ul className="space-y-2.5">
            {experience.achievements.map((item, idx) => (
              <li
                key={idx}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed flex items-start gap-2.5"
              >
                <Icons.check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Core Technologies & Subjects */}
      {experience.skills && experience.skills.length > 0 && (
        <div className="space-y-2 pt-2 border-t">
          <h4 className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
            Core Technologies &amp; Subjects
          </h4>
          <ChipContainer textArr={experience.skills} />
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;

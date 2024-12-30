"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { useState } from "react";
import { 
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker,
  FaDatabase, FaTools, FaCode 
} from "react-icons/fa";

export function SkillsSection() {
  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: <FaCode className="w-12 h-12" />,
      skills: ["Python", "C++", "JavaScript", "TypeScript"],
      colors: [[65, 105, 225], [0, 116, 224]], // Blue shades
    },
    frontend: {
      title: "Frontend Development",
      icon: <FaReact className="w-12 h-12" />,
      skills: ["React.js", "Next.js", "HTML", "CSS", "TailwindCSS"],
      colors: [[14, 165, 233], [56, 189, 248]], // Cyan shades
    },
    backend: {
      title: "Backend & Tools",
      icon: <FaDatabase className="w-12 h-12" />,
      skills: ["MongoDB", "PostgreSQL", "Git", "Docker"],
      colors: [[34, 197, 94], [74, 222, 128]], // Green shades
    },
  };

  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
      {Object.entries(skillCategories).map(([key, category]) => (
        <SkillCard
          key={key}
          title={category.title}
          icon={category.icon}
          skills={category.skills}
          colors={category.colors}
        />
      ))}
    </div>
  );
}

const SkillCard = ({ title, icon, skills, colors = [[125, 211, 252]] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] group/canvas-card"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              colors={colors}
              animationSpeed={3}
              containerClassName="bg-black"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
            {icon}
          </div>
        </div>
        
        <div>
          <h2 className="dark:text-white text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
          <ul className="mt-6 space-y-2 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-200">
            {skills.map((skill) => (
              <li key={skill} className="text-center text-white">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
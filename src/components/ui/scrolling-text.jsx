"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const technologies = {
  frontend: [
    { name: "React", icon: "react.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "TailwindCSS", icon: "tailwind.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "MongoDB", icon: "mongodb.svg" },
  ],
  tools: [
    { name: "Git", icon: "git.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "GitHub", icon: "github.svg" },
  ],
};

export function ScrollingText({ className }) {
  return (
    <div className={cn("relative flex flex-col gap-12 overflow-hidden py-8 bg-muted", className)}>
      {Object.entries(technologies).map(([category, items], categoryIndex) => (
        <div key={category} className="space-y-4">
          <h3 className="text-2xl font-bold text-center capitalize">
            {category} Technologies
          </h3>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: categoryIndex % 2 === 0 ? [0, "-50%"] : ["-50%", 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...items, ...items].map((item, i) => (
              <div
                key={`${category}-${i}`}
                className="flex items-center mx-8 gap-2"
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt={item.name}
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold text-foreground/80">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
} 
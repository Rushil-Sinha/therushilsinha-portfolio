"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "./ui/glowing-effect";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Animated Title */}
      <motion.h1
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="relative mb-5 text-[clamp(4vw,6vw,8vw)] font-bold uppercase tracking-widest text-transparent text-center md:text-left"
                style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                    letterSpacing: "max(5px, 2vw)",
                    opacity: 0.5,
                    zIndex: 1,
                }}
            >
                Projects
            </motion.h1>

      {/* Project Grid */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {PROJECTS.map((project, index) => (
          <GridItem
            key={index}
            area={getGridArea(index)}
            icon={getIcon(index)}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </ul>
    </div>
  );
}

// Grid Item Component
const GridItem = ({ area, icon, title, description, technologies }) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className={`min-h-[14rem] list-none ${area}`}
    >
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          {/* Icon & Title */}
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold text-black dark:text-white">{title}</h3>
              <p className="text-sm text-black dark:text-neutral-400">{description}</p>
            </div>
          </div>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  );
};

// Function to assign grid areas dynamically
const getGridArea = (index) => {
  const areas = [
    "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  ];
  return areas[index % areas.length];
};

// Function to assign icons dynamically
const getIcon = (index) => {
  const icons = [
    <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
    <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
    <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
  ];
  return icons[index % icons.length];
};

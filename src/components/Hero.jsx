import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profileRush.png";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

const Hero = () => {
    return (
        <div className="relative border-b border-neutral-900 pb-4 lg:mb-20 overflow-hidden">
            {/* Background beams positioned behind everything */}
            <div className="absolute inset-0 -z-10">
                <BackgroundBeamsWithCollision />
            </div>

            <div className="flex flex-wrap relative z-20">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Rushil Sinha
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="rounded-2xl w-120"
                            src={profilePic}
                            alt="Rushil Sinha"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

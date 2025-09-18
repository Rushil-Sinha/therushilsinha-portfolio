import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profileRush.png";
import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.png";
import Hero3 from "../assets/Hero3.png";
import { motion, AnimatePresence } from "framer-motion";
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Hero1, Hero2, Hero3];

    useEffect(() => {
        // This sets up a timer that cycles through the images indefinitely.
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                (prevIndex + 1) % images.length
            );
        }, 4000); // 4 seconds: 2s for the image to be visible + 2s for the transition

        return () => clearInterval(interval); // Cleans up the timer
    }, []);
    return (
        <div className="relative border-b border-neutral-900 pb-4 lg:mb-20 overflow-hidden">
            {/* Background beams positioned behind everything */}
            <div className="absolute inset-0 -z-10">
                <BackgroundBeamsWithCollision />
            </div>

            <div className="flex flex-wrap relative z-20">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                       {/* This container is now 250% larger and holds the looping animation. */}
                       <div className="relative pb-16 lg:mt-16 w-full h-64 lg:h-80 flex items-center justify-center lg:justify-start lg:-ml-12">
    <AnimatePresence>
        <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Rushil Sinha Animated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
            className="w-auto h-full absolute" 
        />
    </AnimatePresence>
</div>
<motion.span
    variants={container(0.5)}
    initial="hidden"
    animate="visible"
    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:-mt-20">
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

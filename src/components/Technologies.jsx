"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiSelenium } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const icons = [
    { icon: <RiReactjsLine className="text-4xl text-white-500" />, position: { x: -120, y: -60 } },
    { icon: <IoLogoFigma className="text-4xl text-white-500" />, position: { x: 120, y: -60 } },
    { icon: <SiMysql className="text-4xl text-white-500" />, position: { x: -120, y: 60 } },
    { icon: <SiSelenium className="text-5xl text-white-500" style={{ clipPath: "circle(45%)" }} />, position: { x: 120, y: 60 } },
    { icon: <FaJava className="text-4xl text-white-500" />, position: { x: 0, y: 120 } },
    { icon: <RiNodejsLine className="text-4xl text-white-500" />, position: { x: 0, y: -120 } },
];
const Technologies = () => {
    // Generate star positions once using useMemo
    const stars = useMemo(() =>
        [...Array(100)].map((_, index) => ({
            id: index,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
        })),
        []
    );
    return (
        <div className="relative flex flex-col items-center justify-center pb-24 pt-10 overflow-hidden border-b border-neutral-900">
            {/* Background Stars (Now Static) */}
            <div className="absolute inset-0 -z-10">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute w-[2px] h-[2px] bg-white rounded-full"
                        style={{
                            top: star.top,
                            left: star.left,
                            opacity: star.opacity,
                        }}
                    />
                ))}
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="relative mb-20 text-[clamp(4vw,6vw,8vw)] font-bold uppercase tracking-widest text-transparent text-center md:text-left"
                style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                    letterSpacing: "max(5px, 2vw)",
                    opacity: 0.5,
                    zIndex: 1,
                }}
            >
                Technologies
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [1, 0.5, 0.2, 1, 0.8, 1, 0.3, 1], // Flickering effect
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity, // Continuous flicker
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 0.7, 0.85, 0.9, 1], // Random flicker timing
                    }}
                    className="absolute right-0 top-full mt-2 text-white lowercase italic font-bold text-[clamp(1.5vw,2vw,3vw)] text-right"
                    style={{
                        textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1)",
                        letterSpacing: "max(2px, 0.5vw)",
                        filter: "blur(0.5px)",
                        zIndex: 2,
                    }}
                >
                    what i work on..
                </motion.span>
            </motion.h1>



            <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Outer Circular Rings */}
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-48 h-48 rounded-full opacity-40"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.3) 90%, rgba(255,255,255,1) 100%)",
                    }}
                ></motion.div>
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-38 h-38 rounded-full opacity-60"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.3) 90%, rgba(255,255,255,1) 100%)",
                    }}
                ></motion.div>
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-28 h-28 rounded-full opacity-80"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.3) 90%, rgba(255,255,255,1) 100%)",
                    }}
                ></motion.div>

                {/* Central JavaScript icon */}
                <motion.div
                    initial={{ scale: 1 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute flex items-center justify-center rounded-full w-24 h-24 shadow-lg"
                    style={{
                        background: "linear-gradient(180deg, rgb(89, 89, 89),rgb(33, 33, 33))",
                    }}
                >
                    <IoLogoJavascript className="text-7xl text-white-500" style={{ clipPath: "circle(40%)" }} />
                </motion.div>

                {/* Surrounding icons with inline styles for circular positioning */}
                {icons.map(({ icon, position }, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            scale: 0.5,   // Start small
                            opacity: 0,   // Fully hidden
                            x: 0,         // Centered with main icon
                            y: 0,
                            zIndex: -1    // Behind the main icon
                        }}
                        whileInView={{
                            scale: 1,       // Grow to normal size
                            opacity: 1,     // Fade in
                            x: position.x,  // Move to assigned x position
                            y: position.y,  // Move to assigned y position
                            zIndex: 0       // Bring to front
                        }}
                        transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                        className="absolute w-16 h-16 flex items-center justify-center rounded-full bg-neutral-800 border-1 border-neutral-700 shadow-md"
                        style={{
                            background: "linear-gradient(180deg, rgb(89, 89, 89),rgb(33, 33, 33))",
                        }}
                    >
                        {icon}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ABOUT } from "../constants";
import img1 from "../assets/images/3.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/1.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import { cn } from "../components/ui/utils";

const images = [img1, img2, img3, img4, img5];

export const MaskContainer = ({
    children,
    revealText,
    size = 10,
    revealSize = 600,
    className,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const updateMousePosition = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };

        if (containerRef.current) {
            containerRef.current.addEventListener("mousemove", updateMousePosition);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("mousemove", updateMousePosition);
            }
        };
    }, []);

    let maskSize = isHovered ? revealSize : size;

    return (
        <motion.div
            ref={containerRef}
            className={cn("h-screen relative bg-white", className)}
            animate={{
                backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
            }}
        >
            <motion.div
                className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white"
                style={{
                    maskImage: `url(/mask.svg)`,
                    maskSize: `${maskSize}px`,
                    maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
                    WebkitMaskImage: `url(/mask.svg)`,
                }}
            >
                <div className="absolute inset-0 bg-black h-full w-full opacity-50" />
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20"
                >
                    {children}
                </div>
            </motion.div>

            <div className="w-full h-full flex items-center justify-center text-white">
                {revealText}
            </div>
        </motion.div>
    );
};

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(2);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen border-b border-neutral-900">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-5 text-center text-4xl text-white"
            >
                About <span className="text-gray-300">Me</span>
            </motion.h1>

            <div className="relative flex items-center justify-center w-full max-w-4xl h-96">
                {images.map((img, index) => {
                    let position = "opacity-0 scale-75";
                    if (index === currentIndex) {
                        position = "z-20 opacity-100 scale-110";
                    } else if (index === (currentIndex - 1 + images.length) % images.length) {
                        position = "z-10 opacity-80 scale-100 -translate-x-40";
                    } else if (index === (currentIndex + 1) % images.length) {
                        position = "z-10 opacity-80 scale-100 translate-x-40";
                    } else if (index === (currentIndex - 2 + images.length) % images.length) {
                        position = "z-0 opacity-50 scale-90 -translate-x-72";
                    } else if (index === (currentIndex + 2) % images.length) {
                        position = "z-0 opacity-50 scale-90 translate-x-72";
                    }

                    return (
                        <motion.img
                            key={index}
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className={`absolute transition-all duration-500 ${position} rounded-lg shadow-lg w-80 h-56 object-cover`}
                        />
                    );
                })}

                <button
                    onClick={prevSlide}
                    className="absolute left-5 z-30 text-3xl text-white p-2 rounded-full"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-5 z-30 text-3xl text-white p-2 rounded-full"
                >
                    ❯
                </button>
            </div>

            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-5 text-center text-2xl text-white"
            >
                What I’m Doing When I’m Not Working
            </motion.h1>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-5 text-center text-1xl text-gray-300"
            >
                Because even super<span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text tracking-tight text-transparent">developers</span> need a break!
            </motion.h1>

            <div className="mt-10 text-center text-white w-140">
                {ABOUT[currentIndex] ? (
                    <>
                        <h2 className="text-1xl">
                            {ABOUT[currentIndex].emoji} {ABOUT[currentIndex].title}
                        </h2>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {ABOUT[currentIndex].text}
                        </p>
                    </>
                ) : (
                    <p className="text-gray-400">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Carousel;

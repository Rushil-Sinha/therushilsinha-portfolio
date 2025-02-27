"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export default function Contact() {
    return (

        <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-b from-[#B0B0B0] to-[#4A4A4A] py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
        >
            Let's build<br /> something together.
        </motion.h1>


    );
}

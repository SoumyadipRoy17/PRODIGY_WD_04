"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m=auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className=" text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          Hey, I am{" "}
          <motion.div variants={slideInFromRight(0.8)}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Soumyadip Roy
            </span>
          </motion.div>
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col gap-6 mt-1 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
          >
            A Full Stack Developer
          </motion.div>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] "
        >
          I am a fullstack developer with a passion for creating and developing
          web applications. I am currently working on a few projects and
          learning new technologies to improve my skills. I am always open to
          new opportunities and challenges.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1.4)}
          className="py-2 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <a href="https://www.linkedin.com/in/soumyadip-roy-8994a3267/">
            Connect on LinkedIn
          </a>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="./res/mainIconsdark.svg"
          width={650}
          height={650}
          alt="work icons"
        />
      </motion.div>
    </motion.div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const HomeLanding = () => {
  const [delay, setDelay] = useState(1.5);
  const [toDelay, setToDelay] = useState(0.5);
  const [logoDelay, setLogoDelay] = useState(1);

  const controls = useAnimation();
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem("homeLandingAnimationPlayed");
    if (played) {
      controls.set({ opacity: 1, scale: 1 });
      setAnimationPlayed(true);
      setDelay(0);
      setToDelay(0);
      setLogoDelay(0);
    } else {
      controls
        .start({
          opacity: 1,
          scale: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeOut" },
        })
        .then(() => {
          controls.start({
            scale: [1, 1.3, 1],
            transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
          });
          setAnimationPlayed(true);
          sessionStorage.setItem("homeLandingAnimationPlayed", "true");
        });
    }
  }, [controls]);

  useEffect(() => {
    if (!animationPlayed) {
      const timer = setTimeout(() => setToDelay(0), toDelay * 1000 + 500);
      return () => clearTimeout(timer);
    } else {
      setToDelay(0);
    }
  }, [animationPlayed, toDelay]);

  useEffect(() => {
    if (!animationPlayed) {
      const timer = setTimeout(() => setLogoDelay(0), logoDelay * 1000 + 500);
      return () => clearTimeout(timer);
    } else {
      setLogoDelay(0);
    }
  }, [animationPlayed, logoDelay]);

  return (
    <div className="bg-rbrains-background">
      <div className="flex w-full flex-row pb-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: delay }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          onAnimationComplete={() => setDelay(0)}
          viewport={{ once: true }}
          id="left squiggle"
          className="relative top-6 flex-1"
        >
          <Image
            className="h-full w-full object-contain"
            src="/homelanding/squiggle2.svg"
            alt="left squiggle"
            fill
          />
        </motion.div>

        <div className="relative ml-6 flex flex-1 flex-col items-center justify-center">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            whileHover={{
              scale: 1.05,
            }}
            viewport={{ once: true }}
            id="Welcome text "
            className="z-10 w-full"
          >
            <Image
              className="h-auto w-full object-contain"
              src="/homelanding/curvetext.svg"
              alt="Welcome text"
              width={0}
              height={0}
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute top-[50%] z-10 flex w-full flex-none -translate-y-[30%] items-center justify-center">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: toDelay }}
              viewport={{ once: true }}
              whileHover={toDelay === 0 ? { scale: 1.05 } : {}}
              id="`TO`text"
              className="w-1/8 max-w-[4rem]"
            >
              <Image
                className="h-auto w-full object-contain"
                src="/homelanding/TO.svg"
                alt="TO text"
                width={0}
                height={0}
                sizes="100vw"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: logoDelay, duration: 0.35 }}
            viewport={{ once: true }}
            onAnimationEnd={() => setLogoDelay(0)}
            whileHover={logoDelay === 0 ? { scale: 1.05 } : {}}
            id="rBrain logo"
            className="relative z-10 h-auto w-full"
          >
            <div className="absolute right-0 bottom-0 left-0 -translate-y-[5%] transform">
              <Image
                className="h-auto w-full object-contain"
                src="/homelanding/rbrainslogo.svg"
                alt="rbrain logo"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: delay }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          onAnimationComplete={() => setDelay(0)}
          id="right squiggle"
          className="relative top-6 flex-1"
        >
          <Image
            className="h-full w-full object-contain"
            src="/homelanding/squiggle1.svg"
            alt="right squiggle"
            fill
          />
        </motion.div>
      </div>

      <div className="mx-auto flex w-full items-center px-2">
        <motion.div
          className="flex-grow border-b-2 border-[#282220]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controls}
          id="heart"
          className="relative mx-9 h-4 w-4"
        >
          <Image
            className="absolute top-0 left-0"
            src="/homelanding/heart3.svg"
            alt="left circle"
            width={9}
            height={9}
          />
          <Image
            className="absolute top-0 right-0"
            src="/homelanding/heart2.svg"
            alt="right circle"
            width={9}
            height={9}
          />
          <Image
            className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
            src="/homelanding/heart1.svg"
            alt="bottom heart shape"
            width={13}
            height={13}
          />
        </motion.div>
        <motion.div
          className="flex-grow border-b-2 border-[#282220]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "right" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default HomeLanding;

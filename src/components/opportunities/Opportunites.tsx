"use client";
import React from "react";
import Button from "@/components/ReuseableButton";
import BoxComponent from "@/components/ReusableBox";
import Title from "@/components/ReusableTitle";
import Image from "next/image";
import { motion } from "motion/react";
import image1 from "@/public/Opportunities/Lab Coat.webp";
import image2 from "@/public/Opportunities/Brainstorm Skill.webp";
import image3 from "@/public/Opportunities/Trust.webp";
import image4 from "@/public/Opportunities/Volunteering.webp";
import image5 from "@/public/Opportunities/Head With Brain.webp";
import image6 from "@/public/Opportunities/Psychology.webp";
import squiggle1 from "@/public/notfound/Purple.webp";
import squiggle2 from "@/public/notfound/Blue.webp";
import squiggle3 from "@/public/Opportunities/red and green heart squiggle.webp";

const Opportunities = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="relative">
        <motion.div
          className="absolute top-0 right-0 z-10 -mt-8 -mr-15 hidden md:block"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <Image
            src={squiggle1}
            alt="Decorative squiggle"
            width={squiggle1.width}
            height={squiggle1.height}
          />
        </motion.div>

        <motion.div
          className="px-6 pt-10 text-start md:px-10 md:pt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title text="LAB" textSize="text-3xl md:text-[40px]" />
        </motion.div>

        <motion.div
          className="flex flex-row px-6 pt-5 text-center md:px-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BoxComponent
            padding="p-6 md:p-10"
            textSize="text-base md:text-[1.7vw]"
            borderColor="border-[#D6B685]"
          >
            <motion.div
              className="p-3 text-center text-base font-medium text-[#442F2C] md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Students who are working in research labs can earn up to 4 units
              per quarter. Registering for unit credit means that the lab work
              will appear on your transcript and thus gives you a better way of
              tracking and reporting this volunteer effort.
            </motion.div>

            <div className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-between md:gap-8">
              <div className="flex justify-center gap-6 md:hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{
                    scale: [1, 1.05, 1],
                    transition: {
                      scale: {
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={image1}
                    alt="Lab Coat"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{
                    scale: [1, 1.05, 1],
                    transition: {
                      scale: {
                        repeat: Infinity,
                        duration: 2,
                        delay: 1,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={image2}
                    alt="Brainstorm"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <motion.div
                className="ml-10 hidden md:block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
                whileInView={{
                  y: [0, -10, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    },
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={image1}
                  alt="Lab Coat"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-3 text-base font-medium text-[#442F2C] md:text-xl">
                  See available opportunities
                </div>
                <div className="flex flex-col items-center justify-center gap-4 pt-5 pb-6 md:flex-row md:gap-20">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      text="Research Labs"
                      buttonColor="bg-[#BE9C6A]"
                      link="https://psychology.ucr.edu/research-labs"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      text="B.G Center"
                      buttonColor="bg-[#BE9C6A]"
                      link="https://braingamecenter.ucr.edu/#"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="mr-10 hidden md:block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.3 },
                }}
                whileInView={{
                  y: [0, 10, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      delay: 1.5,
                      ease: "easeInOut",
                    },
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={image2}
                  alt="Brainstorm"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </BoxComponent>
        </motion.div>
      </div>

      <div className="relative mt-8 md:mt-16">
        <motion.div
          className="absolute top-0 left-0 z-10 -mt-16 -ml-15 hidden md:block"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <Image
            src={squiggle2}
            alt="Decorative squiggle"
            width={squiggle2.width}
            height={squiggle2.height}
          />
        </motion.div>

        <motion.div
          className="px-6 pt-10 text-center md:px-10 md:pt-20 md:text-end"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Title text="Volunteering" textSize="text-3xl md:text-[40px]" />
        </motion.div>

        <motion.div
          className="flex justify-center px-6 pt-5 md:px-12"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <BoxComponent
            padding="p-6 md:p-10"
            textSize="text-base md:text-xl"
            borderColor="border-[#688B96]"
          >
            <motion.div
              className="p-3 text-center text-base font-medium text-[#442F2C] md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
            >
              The key to your dream job does not just depend on advancing your
              academic knowledge and interning opportunities, but in gaining
              memorable experiences that give you a competitive advantage.
            </motion.div>

            <div className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-between md:gap-8">
              <div className="flex justify-center gap-6 md:hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{
                    y: [0, -5, 0],
                    transition: {
                      y: {
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={image3}
                    alt="Trust"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{
                    y: [0, -5, 0],
                    transition: {
                      y: {
                        repeat: Infinity,
                        duration: 2.5,
                        delay: 1.25,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={image4}
                    alt="Volunteering"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Desktop: Left image */}
              <motion.div
                className="ml-10 hidden md:block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                  transition: { duration: 0.3 },
                }}
                whileInView={{
                  x: [0, -5, 5, -5, 0],
                  transition: {
                    x: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    },
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={image3}
                  alt="Trust"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <div className="p-3 text-base font-medium text-[#442F2C] md:text-xl">
                  Learn more about community service in Riverside & more
                </div>
                <div className="flex items-center justify-center gap-20 pt-5 pb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      text="Volunteering"
                      buttonColor="bg-[#688B96]"
                      link="https://careers.ucr.edu/students/student-jobs/community-services"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="mr-10 hidden md:block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{
                  scale: 1.15,
                  rotate: -10,
                  transition: { duration: 0.3 },
                }}
                whileInView={{
                  x: [0, 5, -5, 5, 0],
                  transition: {
                    x: {
                      repeat: Infinity,
                      duration: 4,
                      delay: 2,
                      ease: "easeInOut",
                    },
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={image4}
                  alt="Volunteering"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </BoxComponent>
        </motion.div>
      </div>

      <div className="relative mt-8 pb-10 md:mt-16 md:pb-20">
        <motion.div
          className="absolute right-0 -z-10 -mt-40 -mr-6 hidden md:block"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <Image
            src={squiggle3}
            alt="Decorative squiggle"
            width={squiggle3.width}
            height={squiggle3.height}
          />
        </motion.div>

        <motion.div
          className="px-6 pt-10 text-start md:px-10 md:pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <Title text="Club" textSize="text-3xl md:text-[40px]" />
        </motion.div>

        <motion.div
          className="relative z-10 flex justify-center px-6 pt-5 md:px-12"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <BoxComponent
            padding="p-6 md:p-10"
            textSize="text-base md:text-xl"
            borderColor="border-[#B64D4C]"
          >
            <motion.div
              className="p-3 text-center text-base font-medium text-[#442F2C] md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              viewport={{ once: true }}
            >
              R'Brains and Behavior will arrange various social events with UCR
              staff and alumni in order to allow members the opportunity to
              create networks within and outside of the university. This
              organization will stand as a support of each member as they find
              or expand their concentration within the field of psychology.
            </motion.div>

            <div className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-between md:gap-8">
              <div className="flex justify-center gap-6 md:hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{
                    rotate: [0, 10, -10, 0],
                    transition: {
                      rotate: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={image5}
                    alt="Head With Brain"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  whileHover={{ scale: 1.3, rotate: -180 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{
                    rotate: [0, -10, 10, 0],
                    transition: {
                      rotate: {
                        repeat: Infinity,
                        duration: 4,
                        delay: 2,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={image6}
                    alt="Psychology"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <motion.div
                className="ml-10 hidden md:block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                whileInView={{
                  rotate: [0, 5, -5, 0],
                  transition: {
                    rotate: {
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    },
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={image5}
                  alt="Head With Brain"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                viewport={{ once: true }}
              >
                <div className="p-3 text-base font-medium text-[#442F2C] md:text-xl">
                  Learn more about R'BRAINS
                </div>
                <div className="flex items-center justify-center gap-20 pt-5 pb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      text="HighlanderLink"
                      buttonColor="bg-[#B64D4C]"
                      link="https://highlanderlink.ucr.edu/organization/rbrains"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="mr-10 hidden md:block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                whileHover={{
                  scale: 1.2,
                  rotate: -360,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                whileInView={{
                  rotate: [0, -5, 5, 0],
                  transition: {
                    rotate: {
                      repeat: Infinity,
                      duration: 5,
                      delay: 2.5,
                      ease: "easeInOut",
                    },
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={image6}
                  alt="Psychology"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </BoxComponent>
        </motion.div>
      </div>
    </div>
  );
};

export default Opportunities;

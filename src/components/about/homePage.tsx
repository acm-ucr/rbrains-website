"use client";
import Title from "@/components/ReusableTitle";
import BoxComponent from "@/components/ReusableBox";
import Image from "next/image";
import Button from "@/components/ReuseableButton";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="px-10 pt-5 pb-4 text-center md:text-left"
      >
        <Title text="ABOUT US" textSize="text-2xl md:text-[40px]" />
      </motion.div>

      <div
        id="Box-image"
        className="flex flex-col-reverse space-x-0 px-4 md:flex-row md:space-x-10 md:px-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="basis-[65%]"
        >
          <BoxComponent
            padding="p-6"
            textSize="text-md md:text-[1.7vw]"
            borderColor="border-[#D66E6D]"
          >
            <p className="font-[SeoulHangang CL] text-center">
              R’Brains is a psychology-focused club at UCR dedicated to
              fostering curiosity and engagement in the field of psychology. We
              provide a space for students to explore psychological topics,
              connect with professionals, and support mental well-being.
            </p>

            <div className="flex flex-row items-center justify-center pt-10">
              <Button
                text="Learn More"
                buttonColor="bg-[#D66E6D]"
                link="https://www.instagram.com/rbrainsatucr/?igsh=NTc4MTIwNjQ2YQ%3D%3D"
              />
            </div>
          </BoxComponent>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex basis-[35%] items-center justify-center"
        >
          <Image
            alt="“You have to believe in yourself when no one else does.” - Serena Williams"
            src="/home/quote.webp"
            width={400}
            height={250}
            className="w-3/4 -translate-y-0 object-contain md:w-auto md:-translate-y-10"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        id="Mission statement"
        className="flex flex-col p-5 pt-12 md:pr-20 md:pl-10"
      >
        <div className="p-0 text-center md:flex md:pt-5 md:pb-4 md:text-left">
          <Title text="MISSION STATEMENT" textSize="text-2xl md:text-[40px]" />
        </div>
        <div className="mx-auto md:mx-0 md:pt-5">
          <BoxComponent
            borderColor="border-[#C485B7]"
            padding="p-6"
            textSize="text-md md:text-[1.7vw]"
          >
            <p className="font-[SeoulHangang CL] text-center">
              R'Brains and Behavior is a student-led psychology club dedicated
              to creating an inclusive environment for anyone interested in
              psychology. We provide a space to explore diverse topics, engage
              in related activities, and connect with like-minded individuals.
              Our mission is to support members' educational and professional
              growth by offering networking opportunities, career development,
              and resources. Through events with UCR staff and alumni, we aim to
              foster a strong community and help members discover and expand
              their focus within the field of psychology.
            </p>
          </BoxComponent>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        id="HOW TO JOIN"
        className="flex-col px-10 pt-5 pb-4"
      >
        <div className="text-center md:flex md:flex-row md:items-end md:justify-end md:pr-10 md:text-right">
          <Title text="HOW TO JOIN" textSize="text-2xl md:text-[40px]" />
        </div>
        <div className="md:pt-5 md:pr-10 md:pb-10">
          <BoxComponent
            padding="p-6"
            borderColor="border-[#C485B7]"
            textSize="text-lg md:text-[2.5vw]"
          >
            <div className="font-[SeoulHangang CL] p flex flex-col justify-center space-y-6 pt-8 pb-8 text-center">
              <p>Find us on the Highlander Link:</p>
              <motion.div
                className="flex flex-row items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Button
                  text="R'Brains"
                  buttonColor="bg-[#C485B7]"
                  link="https://highlanderlink.ucr.edu/organization/rbrains"
                />
              </motion.div>
            </div>
          </BoxComponent>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center pt-5"
      >
        <Title text="WHAT WE DO" textSize="text-2xl md:text-[40px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="basis-[65%] pr-10 pb-22 pl-10"
      >
        <BoxComponent
          borderColor="border-[#C485B7]"
          padding="p-6"
          textSize="text-md md:text-[1.7vw]"
        >
          <p className="font-[SeoulHangang CL] text-center">
            R'Brains brings students together to explore psychology through
            engaging events. We aim to educate, support mental well-being, and
            build a community passionate about understanding the mind.
          </p>
        </BoxComponent>
      </motion.div>
    </div>
  );
};

export default HomePage;

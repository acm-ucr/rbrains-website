"use client";

import Title from "@/components/ReusableTitle";
import BoxComponent from "@/components/ReusableBox";
import Image from "next/image";
import Button from "@/components/ReuseableButton";
import { motion } from "motion/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { carouselPhotos } from "@/data/carousel";

const HomePage = () => {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="px-10 pt-5 text-center md:text-left"
      >
        <Title text="ABOUT US" textSize="text-2xl md:text-[40px]" />
      </motion.div>

      <div className="flex flex-col-reverse gap-6 px-4 md:flex-row md:gap-10 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:basis-[65%]"
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

            <div className="flex justify-center pt-10">
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
          className="flex items-center justify-center md:basis-[35%]"
        >
          <Image
            alt="Serena Williams quote"
            src="/home/quote.webp"
            width={400}
            height={250}
            className="w-3/4 object-contain md:w-auto md:-translate-y-10"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        id="Mission statement"
        className="px-5 md:px-10"
      >
        <Title text="MISSION STATEMENT" textSize="text-2xl md:text-4xl" />

        <div className="pt-5">
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
              and resources.
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
        className="px-10"
      >
        <div className="text-right">
          <Title text="HOW TO JOIN" textSize="text-2xl md:text-[40px]" />
        </div>

        <div className="pt-5 pb-10">
          <BoxComponent
            padding="p-6"
            borderColor="border-[#C485B7]"
            textSize="text-lg md:text-[2.5vw]"
          >
            <div className="font-[SeoulHangang CL] flex flex-col items-center space-y-6 pt-8 pb-8 text-center">
              <p>Find us on the Highlander Link:</p>
              <motion.div whileHover={{ scale: 1.02 }}>
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative hidden px-6 pb-20 md:flex md:px-16"
      >
        <Carousel
          className="w-full overflow-visible px-12"
          opts={{
            align: "center",
            startIndex: 1,
          }}
        >
          <CarouselContent className="snap-x snap-mandatory">
            {carouselPhotos.map((photo, idx) => (
              <CarouselItem
                key={idx}
                className="flex-shrink-0 basis-[60%] transition-all duration-300 ease-in-out md:basis-[50%]"
              >
                <Card className="h-full w-full overflow-hidden rounded-xl md:h-[450px]">
                  <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 hidden md:flex" />
          <CarouselNext className="right-2 hidden md:flex" />
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="pt-1 text-center"
      >
        <Title text="WHAT WE DO" textSize="text-2xl md:text-[40px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="px-10 pb-12"
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

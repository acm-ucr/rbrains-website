"use client";
import Button from "@/components/ReuseableButton";
import BoxComponent from "@/components/ReusableBox";
import Title from "@/components/ReusableTitle";
import { motion } from "motion/react";

const ResourceServices = () => {
  return (
    <div className="overflow-x-clip">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="px-10 pt-20"
      >
        <Title text="UCR Services" textSize="text-[40px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="Box-image"
        className="flex flex-row space-x-10 px-12 pt-5 text-center"
      >
        <div className="basis-full">
          <BoxComponent
            padding="p-6"
            textSize="text-[1.7vw]"
            borderColor="border-[#93B48F]"
          >
            {/* The Well */}
            <div className="p-3 text-2xl font-bold text-[#D66E6D]">
              UCR's Health Promotion and Education Department
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              The Well provides students with health education tools, knowledge,
              resources, and supplies to keep themselves as healthy as possible
              so they can succeed at UCR and beyond.
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              Learn more about resources
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-row items-center justify-center pt-2 pb-15"
            >
              <Button
                text="The Well"
                buttonColor="bg-[#D66E6D]"
                link="https://well.ucr.edu/"
              />
            </motion.div>

            {/* CAPS */}
            <div className="p-3 text-2xl font-bold text-[#5F95A7]">
              Counseling & Psychological Services (CAPS)
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              CAPS is dedicated to creating a positive, healthy atmosphere for
              our undergraduate and graduate student populations, working
              hand-in-hand with students to provide access to mental health
              resources that support and promote their academic, career,
              personal and social development.
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              Learn more about resources
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-row items-center justify-center pt-2 pb-15"
            >
              <Button
                text="CAPS"
                buttonColor="bg-[#5F95A7]"
                link="https://counseling.ucr.edu/"
              />
            </motion.div>

            {/* CARE */}
            <div className="p-3 text-2xl font-bold text-[#846FA8]">
              Campus Advocacy, Resources & Education (CARE)
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              CARE is an intervention and prevention support program committed
              to ending sexual violence at UC Riverside. We seek to unite,
              inspire and cultivate a community culture of care by providing
              direct advocacy, resources and prevention educational programming
              related to issues of sexual assault, relationship violence and
              stalking to students, staff, faculty and UCR affiliates.
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              Learn more about resources
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-row items-center justify-center pt-2 pb-10"
            >
              <Button
                text="CARE"
                buttonColor="bg-[#846FA8]"
                link="https://care.ucr.edu/"
              />
            </motion.div>
          </BoxComponent>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="justify-self-end px-10 pt-20 pb-8 md:pt-10"
      >
        <Title text="Health and Crisis Resources" textSize="text-[40px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="Box-image"
        className="flex flex-row space-x-10 px-12 pt-5 text-center"
      >
        <div className="basis-full">
          <BoxComponent
            padding="p-6"
            textSize="text-[1.7vw]"
            borderColor="border-[#93B48F]"
          >
            {/* SAMHSA */}
            <div className="p-3 text-2xl font-bold text-[#D66E6D]">
              Substance Abuse and Mental Health Services Administration (SAMHSA)
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              SAMHSA is a U.S. government agency that promotes mental health and
              substance use treatment through funding, resources, and policy
              initiatives to support prevention, recovery, and accessible care.
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              Learn more about resources
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-row items-center justify-center pt-2 pb-15"
            >
              <Button
                text="SAMHSA"
                buttonColor="bg-[#D66E6D]"
                link="https://www.samhsa.gov/"
              />
            </motion.div>

            {/* Crisis Hotline */}
            <div className="p-3 text-2xl font-bold text-[#5F95A7]">
              Behavioral Health Crisis Hotline
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              The Riverside University Health System - Behavioral Health Crisis
              Hotline provides immediate support and resources for individuals
              experiencing mental health crises, offering 24/7 assistance to
              connect callers with professional help and community services.
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              Learn more about resources
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-row items-center justify-center pt-2 pb-15"
            >
              <Button
                text="Crisis Hot-line"
                buttonColor="bg-[#5F95A7]"
                link="https://www.rcdmh.org/Directors-Message"
              />
            </motion.div>

            {/* HRSA */}
            <div className="p-3 text-2xl font-bold text-[#846FA8]">
              Health Resources & Services Administration (HRSA)
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              HRSA is a U.S. government agency that improves healthcare access
              for underserved communities by providing funding, resources, and
              programs focused on primary care, maternal and child health, rural
              health, and healthcare workforce development.
            </div>
            <div className="p-3 text-xl font-medium text-[#442F2C]">
              Learn more about resources
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-row items-center justify-center pt-2 pb-10"
            >
              <Button
                text="HRSA"
                buttonColor="bg-[#846FA8]"
                link="https://www.hrsa.gov/"
              />
            </motion.div>
          </BoxComponent>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourceServices;

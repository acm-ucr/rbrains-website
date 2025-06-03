import Title from "@/components/ReusableTitle";
import BoxComponent from "@/components/ReusableBox";
import Image from "next/image";
import Button from "@/components/ReuseableButton";

const HomePage = () => {
  return (
    <div>
      <div className="px-10 pt-5 pb-4">
        <Title text="ABOUT US" textSize="text-[40px]" />
      </div>

      <div id="Box-image" className="flex flex-row space-x-10 px-12">
        <div className="basis-[65%]">
          <BoxComponent
            padding="p-6"
            textSize="text-[1.7vw]"
            borderColor="border-[#D66E6D]"
          >
            <p className="font-seoul text-center">
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
        </div>
        <div className="flex basis-[35%] items-center justify-center">
          <Image
            alt="“You have to believe in yourself when no one else does.” - Serena Williams"
            src="/quote.webp"
            width={380}
            height={250}
            className="-mt-6 -mb-10 object-contain"
          />
        </div>
      </div>

      <div id="Mission statement" className="flex flex-col pt-3 pr-20 pl-10">
        <div className="flex pt-5 pb-4">
          <Title text="MISSION STATEMENT" textSize="text-[40px]" />
        </div>
        <div className="pt-5">
          <BoxComponent
            borderColor="border-[#C485B7]"
            padding="p-6"
            textSize="text-[1.7vw]"
          >
            <p className="font-seoul text-center">
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
      </div>
      <div id="HOW TO JOIN" className="flex-col px-10 pt-5 pb-4">
        <div className="flex flex-row items-end justify-end pr-10">
          <Title text="HOW TO JOIN" textSize="text-[40px]" />
        </div>
        <div className="pt-5 pr-10 pb-10">
          <BoxComponent
            padding="p-6"
            borderColor="border-[#C485B7]"
            textSize="text-[2.5vw]"
          >
            <div className="font-seoul p flex flex-col justify-center space-y-6 pt-8 pb-8 text-center">
              <p>Find us on the Highlander Link:</p>
              <a href="https://highlanderlink.ucr.edu/organization/rbrains">
                https://highlanderlink.ucr.edu/organization/rbrains
              </a>
            </div>
          </BoxComponent>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

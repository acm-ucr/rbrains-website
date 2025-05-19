import Title from "@/components/Title";
import BoxComponent from "@/components/box-component";
import Image from "next/image";
import Button from "@/components/ReuseableButton";

const HomePage = () => {
  return (
    <div>
      <div className="px-10">
        <Title text="ABOUT US" textSize="text-[40px]" />
      </div>

      <div id="Box-image" className="px- flex flex-row space-x-25 px-12">
        <div className="max-w-[700px]">
          <BoxComponent
            padding="p-6"
            textSize="text-lg"
            borderColor="border-[#D66E6D]"
          >
            <p>
              R’Brains is a psychology-focused club at UCR dedicated to
              fostering curiosity and engagement in the field of psychology. We
              provide a space for students to explore psychological topics,
              connect with professionals, and support mental well-being.
            </p>
            <div className="flex flex-row items-center justify-center py-8">
              <Button
                text="Learn More"
                buttonColor="bg-[#D66E6D]"
                link="/about"
              />
            </div>
          </BoxComponent>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="“You have to believe in yourself when no one else does.” - Serena Williams"
            src="/quote.webp"
            width={350}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      <div id="Mission statement" className="flex flex-col"></div>
      <div id="HOW TO JOIN" className="flex-col">
        {/* <h1>HOW TO JOIN</h1>
        <BoxComponent></BoxComponent> */}
      </div>
    </div>
  );
};

export default HomePage;

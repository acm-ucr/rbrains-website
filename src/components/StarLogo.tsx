import Image from "next/image";

const Component = () => {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg bg-[#F9F5EF] p-6 shadow-md">
      <div>
        <Image
          src="/de-stress.png"
          alt="DE-STRESS WORKSHOP"
          width={300}
          height={300}
        />
      </div>
      <div className="relative h-[400px] w-[400px]">
        <Image src="/star.png" alt="STAR LOGO" fill />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/mind.png"
            alt="BRAIN LOGO"
            width={205}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Component;

import Image from "next/image";

const Component = () => {
  return (
    <div className="flex bg-[#F9F5EF] p-6">
      <Image
        src="/psychology-panels.webp"
        alt="Psychology-panels Logo"
        className="object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};
export default Component;

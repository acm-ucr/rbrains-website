import Image from "next/image";

const Component = () => {
  return (
    <div className="flex bg-[#F9F5EF] p-6">
      <Image
        src=".IMG_0757.webp"
        alt="Gallery Logo"
        className="object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Component;

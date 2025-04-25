import Image from "next/image";

const Component = () => {
  return (
    <div className="flex items-center justify-center bg-[#F9F5EF] p-6">
      <Image
        src="/StarLogo.webp"
        alt="Star Logo"
        className="object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};
export default Component;

import Board from "@/components/board/Board";
import Title from "@/components/ReusableTitle";
import HomeLanding from "@/components/about/HomeLanding";

const Page = () => {
  return (
    <>
      <HomeLanding />
      <Title text="Get To Know Us!" textSize="text-4xl text-center" />
      <Board />
    </>
  );
};

export default Page;

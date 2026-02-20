import Board from "@/components/board/Board";
import Title from "@/components/ReusableTitle";
import HomeLanding from "@/components/about/HomeLanding";

const Page = () => {
  return (
    <>
      <title>UCR R'Brains - Board</title>
      <meta name="description" content="The board of UCR R'Brains" />
      <HomeLanding />
      <Title text="Get To Know Us!" textSize="text-4xl text-center" />
      <Board />
    </>
  );
};

export default Page;

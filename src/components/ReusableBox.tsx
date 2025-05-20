{
  /* 
  example usage: 

  <div className="bg-[#F9F5EF] p-6">
        <BoxComponent
        padding="p-6"
        textSize="text-lg"
        borderColor="border-[#A23333]"
        >
        <p>Hello</p>
        </BoxComponent>
        
  </div> */
}

interface BoxProps {
  padding: string;
  textSize: string;
  borderColor: string;
  children: React.ReactNode;
}

const BoxComponent = ({
  padding,
  children,
  textSize,
  borderColor,
}: BoxProps) => {
  return (
    <div className="">
      <div
        className={`overflow-hidden rounded-3xl border-[4px] ${borderColor} bg-[#F9F5EF]`}
      >
        <div className={`bg-white ${textSize} ${padding}`}>{children} </div>
      </div>
    </div>
  );
};

export default BoxComponent;

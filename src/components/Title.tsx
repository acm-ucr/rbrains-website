import React from "react";

interface TitleComponent {
  text: string;
  textSize: string;
}

const Title = ({ text, textSize }: TitleComponent) => {
  return (
    <p
      className={`bg-amber-50 p-3 font-serif font-bold text-amber-950 ${textSize} text-2xl`}
    >
      {text}
    </p>
  );
};

export default Title;

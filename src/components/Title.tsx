import React from "react";

interface TitleComponent {
  text: string;
  textSize: string;
}

const Title = ({ text, textSize }: TitleComponent) => {
  return (
    <p className={`font-rbrains bg-rbrains-background p-3 font-bold text-rbrains-dark-brown ${textSize} text-2xl`}>
      {text}
    </p>
  );
};

export default Title;

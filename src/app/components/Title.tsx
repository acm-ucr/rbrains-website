import React from "react";

interface TitleComponent {
  text: string;
  textSize: string;
}

const Title = ({ text, textSize }: TitleComponent) => {
  return (
    <p
      className={`text-rbrains bg-rbrains-background text-rbrains-dark-brown p-3 font-bold ${textSize}`}
    >
      {text}
    </p>
  );
};

export default Title;

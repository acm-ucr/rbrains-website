{
  /* 
    Example usage:
    Note: Use full URL for links directing to external sites. Example: link="https://google.com"
    for internal links, use relative paths. Example: link="/about". 

    <Button
        text="CARE"
        buttonColor="bg-amber-700"
        link="https://google.com"
      /> */
}

interface ButtonProps {
  text: string;
  link: string;
  buttonColor: string;
}

const button = ({ text, link, buttonColor }: ButtonProps) => {
  return (
    <div className="w-full max-w-[400px] min-w-[300px]">
      <a
        className={`${buttonColor} font-rbrains flex h-[58px] items-center justify-center rounded-3xl px-4 text-sm font-bold whitespace-nowrap text-white md:text-3xl`}
        href={link}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};

export default button;

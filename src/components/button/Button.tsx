const Button = (props: { text: string; width: string; position: string }) => {
  const { text, width, position } = props;
  return (
    <button
      className={`text-center font-bold bg-black text-first p-4 ${width} text-[14px] md:w-[20vw] ${position}`}
    >
      {text}
    </button>
  );
};

export default Button;

const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <button className=" text-center font-bold bg-black text-first p-4 md:w-[20vw]">
      {text}
    </button>
  );
};

export default Button;

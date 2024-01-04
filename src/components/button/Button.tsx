import { RiEqualizerLine } from "react-icons/ri";

const Button = (props: {
  text: string;
  width: string;
  position: string;
  icon: string;
  background: string;
  textColor: string;
  border: string;
  textWidth: string;
  padding: string;
  fontWidth: string;
}) => {
  const {
    text,
    width,
    position,
    icon,
    background,
    textColor,
    border,
    textWidth,
    padding,
    fontWidth,
  } = props;
  return (
    <button
      className={`${fontWidth}  ${background} ${textColor} ${padding} ${width} ${textWidth} md:w-[18vw] ${position} flex justify-center items-center gap-2 ${border}`}
    >
      {text}
      <RiEqualizerLine className={`${icon}`} />
    </button>
  );
};

export default Button;

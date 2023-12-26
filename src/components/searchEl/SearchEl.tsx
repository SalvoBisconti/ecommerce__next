import { CgSearch } from "react-icons/cg";

const SearchEl = (props: {
  display: string;
  icon: string;
  text: string;
  width: string;
  reverseText: string;
}) => {
  const { display, icon, text, width, reverseText } = props;

  return (
    <div
      className={`flex items-center gap-2 h-[75%] md:h-[50%] ${width} border border-[#D3D3D3] bg-first rounded-md p-4 ${display} ${reverseText} md:justify-between`}
    >
      <CgSearch className={`${icon}`} />
      <input className="outline-none" type="text" placeholder={`${text}`} />
    </div>
  );
};

export default SearchEl;

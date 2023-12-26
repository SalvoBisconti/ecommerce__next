import { CgSearch } from "react-icons/cg";

const SearchEl = (props: { display: string; icon: string; text: string }) => {
  const { display, icon, text } = props;

  return (
    <div
      className={`flex items-center gap-2 h-[75%] md:w-[30%] border border-[#D3D3D3] bg-first rounded-md p-4 ${display} md:flex-row-reverse md:justify-between`}
    >
      <CgSearch className={`${icon}`} />
      <input className="outline-none" type="text" placeholder={`${text}`} />
    </div>
  );
};

export default SearchEl;

import { CgSearch } from "react-icons/cg";

const SearchEl = (props: { display: string }) => {
  const { display } = props;

  return (
    <div
      className={`flex items-center gap-2 h-[75%] md:w-[30%] border border-[#D3D3D3] rounded-md p-4 ${display} md:flex-row-reverse md:justify-between`}
    >
      <CgSearch />
      <input
        className="outline-none"
        type="text"
        placeholder="Cosa stai cercando?"
      />
    </div>
  );
};

export default SearchEl;

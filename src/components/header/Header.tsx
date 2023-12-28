import SearchEl from "../searchEl";
import { MdAccountCircle } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className=" h-[100px] w-screen flex flex-col justify-between md:flex-row py-1 gap-2 ">
      <div className="flex justify-between items-center  w-screen h-[50%] md:h-[100%]  p-2 ">
        <h2 className=" text-red text-[30px] font-bold ">LOGO</h2>
        <SearchEl
          display="md:flex hidden"
          icon="flex"
          text="Cosa stai cercando?"
          width="md:w-[30vw]"
          reverseText="md:flex-row-reverse"
        />
        <div className="flex  w-[32vw] md:w-[10%] h-[80%] md:h-[50%] justify-between md:text-[24px] text-[20px]    ">
          <div className="flex w-[55%]  justify-between ">
            <MdAccountCircle className="cursor-pointer text-[26px]" />
            <MdFavoriteBorder className="cursor-pointer text-[26px]" />
          </div>
          <HiOutlineShoppingCart className="cursor-pointer text-[26px]" />
        </div>
      </div>
      <div className=" w-screen h-[50%]  md:hidden flex gap-[5%] items-start px-2 ">
        <div className="flex flex-col justify-center items-center">
          <RxHamburgerMenu className="text-[24px]" />
          <h2 className=" md:hidden text-[14px]"> MENU</h2>
        </div>
        <SearchEl
          display="md:hidden"
          icon="flex"
          text="Cosa stai cercando?"
          width="md:w-[30vw]"
          reverseText="md:flex-row-reverse"
        />
      </div>
    </div>
  );
};

export default Header;

import Filter from "../filter";
import { MdAccountCircle } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=" h-[100px] w-screen flex flex-col justify-between md:flex-row ">
      <div className="flex justify-between items-center  w-screen h-[50%] md:h-[100%]  p-2 ">
        <h2 className=" text-red">LOGO</h2>
        <Filter display="md:flex hidden" />
        <div className="flex  w-[20vw] md:w-[10%] h-[80%] md:h-[50%] justify-between md:text-[24px] text-[20px]    ">
          <div className="flex w-[50%]  justify-between  ">
            <MdAccountCircle className="cursor-pointer" />
            <MdFavoriteBorder className="cursor-pointer" />
          </div>
          <HiOutlineShoppingCart className="cursor-pointer" />
        </div>
      </div>
      <div className=" w-screen h-[50%]  md:hidden flex gap-[5%] items-start ">
        <div className="flex flex-col justify-center items-center">
          <RxHamburgerMenu className="text-[24px]" />
          <h2 className=" md:hidden text-[14px]"> MENU</h2>
        </div>
        <Filter display="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;

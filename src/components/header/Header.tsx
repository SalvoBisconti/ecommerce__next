import SearchEl from "../searchEl";
import List from "../list";
import Line from "../line";

import { MdAccountCircle } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" h-[100px] md:h-[180px] w-screen flex flex-col justify-between py-1 gap-3">
      <div className="hidden md:block w-screen ">
        <div className="flex justify-between p-2  ">
          <List
            itemName={["Chi siamo", "Community", "Brand"]}
            flexOption="flex gap-5"
            fontOption=""
            showLine="hidden"
          />
          <h3 className="">
            ITA
            <p className="font-bold rotate-180 inline-block pt-[2px] ml-1">
              {"^"}
            </p>
          </h3>
        </div>
        <Line width="w-screen" selfCenter="" />
      </div>

      <div className="flex justify-between items-center  w-screen h-[50%] md:h-[100%]  p-2 ">
        <Link className=" text-red text-[30px] font-bold " href="/">
          LOGO
        </Link>
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
          <div className="relative">
            <HiOutlineShoppingCart className="cursor-pointer text-[26px]" />
            <h3 className="absolute -top-[6px] -right-[8px] text-[13px] z-10 rounded-full bg-red px-[5px] text-first">
              2
            </h3>
          </div>
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
      <div className="w-screen hidden flex-col md:flex">
        <Line width="w-screen" selfCenter="" />
        <List
          itemName={["DONNA", "UOMO", "BAMBINI", "TUTTI GLI ARTICOLI"]}
          flexOption="flex gap-4 p-2"
          fontOption="font-semibold text-[14px]"
          showLine="block"
        />
        <Line width="w-screen" selfCenter="" />
      </div>
    </div>
  );
};

export default Header;

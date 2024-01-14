import Card from "../card";
import { GET } from "@/utils/funcs";
import { useState, useEffect } from "react";
import { cardType } from "@/mocks/types";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillTriangleFill } from "react-icons/bs";

import List from "../list";
import Line from "../line";

const CardList = () => {
  const [productsData, setProductsData] = useState<cardType[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [arrowDown, setArrowDown] = useState<boolean>(true);

  useEffect(() => {
    GET().then((data) => setProductsData(data));
  }, []);

  const numberOfPage: number = Math.ceil(productsData.length / 16);

  const onHandleChangePage: any = (type: string) => {
    if (type == "next") {
      if (selectedPage + 1 != numberOfPage) {
        setSelectedPage(selectedPage + 1);
        window.scrollTo(0, 0);
      }
    } else {
      if (selectedPage > 0) {
        setSelectedPage(selectedPage - 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const onHandleSort: any = () => {
    setProductsData(
      productsData
        .slice(0)
        .sort((a, b) => (a.updatedAt <= b.updatedAt ? -1 : 0))
    );
    setArrowDown((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-12  ">
      <div className="md:[&>div]:px-[60px]">
        <div className="flex gap-2 items-center px-4  ">
          <h3>ORDINA PER: </h3>
          <div className="relative">
            <h3
              className="font-bold text-[15px] md:hidden flex items-center gap-2 p-3 text-red cursor-pointer "
              onClick={onHandleSort}
            >
              POPOLARITA'
              <span>
                <BsFillTriangleFill
                  className={`rotate-180 text-[12px] text-lightBlack transition-all ${
                    !arrowDown && "rotate-0"
                  }`}
                />
              </span>
            </h3>
            <hr
              className={`h-[3px] w-[100%] bg-red absolute -bottom-[2px] border-0 `}
            />
          </div>
          <List
            itemName={[
              "POPOLARITA'",
              "PREZZO MINORE",
              "PREZZO MAGGIORE",
              "NOME",
            ]}
            flexOption="flex gap-4 p-2"
            fontOption="font-semibold text-[14px]"
            showLine=""
            visibility="hidden md:flex"
            productsData={productsData}
            setProductsData={setProductsData}
          />
        </div>
        <Line width="w-screen" selfCenter="" />
      </div>

      <div className="flex flex-col justify-center items-center flex-wrap gap-8 md:flex-row md:px-[20px]">
        {productsData
          .slice(selectedPage * 16, (selectedPage + 1) * 16)
          .map((product) => (
            <Card data={product} key={product.id} />
          ))}
      </div>

      <div className="flex justify-center items-center gap-2 ">
        <IoIosArrowBack
          className=" text-black text-[26px] cursor-pointer"
          onClick={() => onHandleChangePage("prev")}
        />
        <h3> {`${selectedPage + 1} di ${numberOfPage}`}</h3>
        <IoIosArrowBack
          className="rotate-180 text-black text-[26px] cursor-pointer "
          onClick={() => onHandleChangePage("next")}
        />
      </div>
    </div>
  );
};

export default CardList;

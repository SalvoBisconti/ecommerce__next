import Card from "../card";
import { GET } from "@/utils/funcs";
import { useState, useEffect } from "react";
import { cardType } from "@/mocks/types";
import { IoIosArrowBack } from "react-icons/io";

const CardList = () => {
  const [productsData, setProductsData] = useState<cardType[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(0);

  useEffect(() => {
    GET().then((data) => setProductsData(data));
  }, []);

  const numberOfPage: number = Math.ceil(productsData.length / 16);

  const onHandleChangePage: any = (type: string) => {
    if (type == "next") {
      selectedPage + 1 != numberOfPage && setSelectedPage(selectedPage + 1);
      window.scrollTo(0, 0);
    } else {
      selectedPage > 0 && setSelectedPage(selectedPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-8 md:flex-row">
      {productsData
        .slice(selectedPage * 16, (selectedPage + 1) * 16)
        .map((product) => (
          <Card data={product} key={product.id} />
        ))}

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

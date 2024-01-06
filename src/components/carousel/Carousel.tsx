import { useState, useEffect } from "react";
import { cardType } from "@/mocks/types";
import { GET } from "@/utils/funcs";
import Card from "../card";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  const [productsCarouselData, setProductsCarouselData] = useState<cardType[]>(
    []
  );

  useEffect(() => {
    GET().then((data) => setProductsCarouselData(data));
  }, []);

  const indexArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const buttonArray = [1, 2, 3];

  const nextPage = (): any =>
    carouselPosition < 2 && setCarouselPosition((prev) => prev + 1);

  const prevPage = (): any =>
    carouselPosition > 0 && setCarouselPosition((prev) => prev - 1);

  const onHandleClick: any = (position: number) => {
    setCarouselPosition(position);
  };

  return (
    <div
      className="flex flex-col gap-7 w-[100vw] h-[540px] md:w-[98vw]  ml-10 md:ml-0  "
      id="ciao"
    >
      <div className="flex items-center justify-between gap-3 ">
        <IoIosArrowBack
          className="hidden md:flex text-[48px] font-extrabold cursor-pointer"
          onClick={() => prevPage()}
        />
        <div className="flex gap-4 overflow-auto p-2 ">
          {productsCarouselData.length &&
            indexArray
              .slice(carouselPosition * 4, (carouselPosition + 1) * 4)
              .map((element) => (
                <Card
                  data={productsCarouselData[element]}
                  key={productsCarouselData[element].id}
                />
              ))}
        </div>
        <IoIosArrowBack
          className="hidden md:flex text-[48px] font-extrabold rotate-180 cursor-pointer"
          onClick={() => nextPage()}
        />
      </div>
      <div className="flex justify-evenly self-center w-[70px] ">
        {buttonArray.length > 0 &&
          buttonArray.map((element: any, index: number) => (
            <button
              className={`h-[12px] w-[12px]  rounded-full cursor-pointer ${
                carouselPosition == index ? "bg-red" : "bg-stronGray"
              } `}
              id={element}
              onClick={() => onHandleClick(index)}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default Carousel;

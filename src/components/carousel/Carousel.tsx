import { useState, useEffect, useRef } from "react";
import { cardType } from "@/mocks/types";
import { GET } from "@/utils/funcs";

import Card from "../card";

const Carousel = () => {
  const [carouselPosition, setCarouselPosition] = useState<number>(1);
  const [productsCarouselData, setProductsCarouselData] = useState<cardType[]>(
    []
  );
  // const ref = useRef(0);

  useEffect(() => {
    GET().then((data) => setProductsCarouselData(data));
  }, []);

  const a: any = new Array(3);
  const indexArray: number[] = [1, 2, 3, 4, 5, 6];
  // const next = (): void =>
  //   carouselPosition > 2
  //     ? setCarouselPosition(0)
  //     : setCarouselPosition((prev) => prev + 1);

  // const prev = (): void =>
  //   carouselPosition === 0
  //     ? setCarouselPosition(3)
  //     : setCarouselPosition((prev) => prev - 1);

  const onHandleClick: any = (position: number) => {
    setCarouselPosition(position);
  };

  // const scroll: any = (scrollOffset: any ) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };

  return (
    <div className="flex flex-col gap-7 w-[90vw] h-[500px] ">
      <div className="flex gap-4 overflow-auto">
        {/* {productsCarouselData.length &&
          indexArray.map((element) => (
            <Card
              data={productsCarouselData[element]}
              key={productsCarouselData[element].id}
            />
          ))} */}
        {/* {productsCarouselData.length && (
          <Card
            data={productsCarouselData[2]}
            key={productsCarouselData[2].id}
          />
        )} */}
      </div>
      <div className="flex justify-evenly self-center w-[70px]">
        {/* {a.map((element: any) => {
          <button
            className="h-4 w-4 bg-red rounded-full"
            id={element}
          ></button>;
          console.log(a);
        })} */}
        <button
          className={`h-[14px] w-[14px] bg-stronGray rounded-full cursor-pointer ${
            carouselPosition == 1 && "bg-red"
          } `}
          onClick={() => onHandleClick(1)}
        ></button>
        <button
          className={`h-[14px] w-[14px] bg-stronGray rounded-full cursor-pointer ${
            carouselPosition == 2 && "bg-red"
          } `}
          onClick={() => onHandleClick(2)}
        ></button>
        <button
          className={`h-[14px] w-[14px] bg-stronGray rounded-full cursor-pointer ${
            carouselPosition == 3 && "bg-red"
          } `}
          onClick={() => onHandleClick(3)}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;

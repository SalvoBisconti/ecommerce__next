import { cardType } from "@/mocks/types";
import { useState } from "react";

const List = (props: {
  itemName: string[];
  flexOption: string;
  fontOption: string;
  showLine: string;
  visibility: string;
  productsData: cardType[] | any;
  setProductsData: React.Dispatch<React.SetStateAction<any>> | any;
}) => {
  const {
    itemName,
    flexOption,
    fontOption,
    showLine,
    visibility,
    setProductsData,
    productsData,
  } = props;
  const [selectedCategory, setSelectedCategory] = useState<string>("DONNA");

  const onClickSelect: any = (category: string) => {
    setSelectedCategory(category);

    itemName.map(
      (element) =>
        (category == "PREZZO MINORE" &&
          setProductsData(
            productsData
              .slice(0)
              .sort((a: { price: number }, b: { price: number }) =>
                b.price >= a.price ? -1 : 0
              )
          )) ||
        (category == "PREZZO MAGGIORE" &&
          setProductsData(
            productsData
              .slice(0)
              .sort((a: { price: number }, b: { price: number }) =>
                a.price >= b.price ? -1 : 0
              )
          )) ||
        (category == "NOME" &&
          setProductsData(
            productsData
              .slice(0)
              .sort((a: { title: number }, b: { title: number }) =>
                a.title <= b.title ? -1 : 0
              )
          )) ||
        (category == "POPOLARITA'" &&
          setProductsData(
            productsData
              .slice(0)
              .sort((a: { updatedAt: number }, b: { updatedAt: number }) =>
                a.updatedAt <= b.updatedAt ? -1 : 0
              )
          ))
    );
  };

  return (
    <ul className={`md:text-right ${flexOption} ${fontOption} ${visibility} `}>
      {itemName.length > 0 &&
        itemName.map((element, index) => {
          return (
            <>
              <li
                className={`flex relative cursor-pointer ${
                  selectedCategory === element &&
                  showLine !== "hidden" &&
                  " text-red"
                }`}
                key={index}
                onClick={() => onClickSelect(element)}
              >
                {element}{" "}
                <hr
                  className={`h-[3px] w-[100%] bg-transparent absolute -bottom-[10px] border-0 ${
                    selectedCategory === element && " bg-red"
                  } ${showLine}`}
                />
              </li>
            </>
          );
        })}
    </ul>
  );
};

export default List;

import { useState } from "react";

const List = (props: {
  itemName: string[];
  flexOption: string;
  fontOption: string;
  showLine: string;
  visibility: string;
}) => {
  const { itemName, flexOption, fontOption, showLine, visibility } = props;
  const [selectedCategory, setSelectedCategory] = useState<string>("DONNA");

  const onClickSelect: any = (category: string) =>
    setSelectedCategory(category);

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

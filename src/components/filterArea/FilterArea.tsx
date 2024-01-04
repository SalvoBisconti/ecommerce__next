import { useState } from "react";
import Button from "../button";
import { BsFillTriangleFill } from "react-icons/bs";

const FilterArea = () => {
  const [isSelected, setIsSelected] = useState<string>("Scarpe");
  const filterName: string[] = ["Scarpe", "Prezzo minimo", "Prezzo massimo"];

  const onHandleSelect: any = (name: string) => setIsSelected(name);

  return (
    <div className="w-screen px-6 flex flex-col mt-8 gap-3">
      <h3> Home / Donna</h3>
      <h2 className="font-bold text-[30px]">Nome categoria</h2>
      <div className=" gap-4 hidden md:flex">
        {filterName.length > 0 &&
          filterName.map((name, index) => (
            <h2
              className={`flex justify-between items-center w-[200px] border rounded border-stronGray p-3 cursor-pointer ${
                isSelected == name && "text-red border-2 border-red font-bold"
              } `}
              key={index}
              onClick={() => onHandleSelect(name)}
            >
              {name}
              <span>
                <BsFillTriangleFill className="rotate-180 text-[12px] text-lightBlack" />
              </span>
            </h2>
          ))}
      </div>
      <Button
        text="Filtri"
        width="md:hidden"
        position=""
        icon="block"
        background="bg-first"
        textColor="text-black"
        border="border-2 border-stronGray"
        textWidth="text-[18px]"
        padding="p-2"
        fontWidth="font-light"
      />
      <div className="flex items-center gap-4 mt-6">
        <h3>HAI SCELTO: </h3>
        <h3 className="bg-black text-first p-3 rounded-md flex gap-3">
          Nome
          <span className="cursor-pointer">X</span>
        </h3>
      </div>
    </div>
  );
};

export default FilterArea;

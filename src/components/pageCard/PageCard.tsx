import { BsBoxSeam } from "react-icons/bs";
import Button from "../button";
import Line from "../line";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { toPercentuagePrice } from "@/utils/funcs";

const PageCard = () => {
  const a = {
    id: 5,
    title: "Refined Bronze Salad",
    price: 350,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    images: [
      "https://i.imgur.com/cSytoSD.jpeg",
      "https://i.imgur.com/WwKucXb.jpeg",
      "https://i.imgur.com/cE2Dxh9.jpeg",
    ],
    creationAt: "2023-12-27T12:23:28.000Z",
    updatedAt: "2023-12-27T12:23:28.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX85rcAp8PuwE8xRCgVpuDn9AksfRGxlwJRA&usqp=CAU",
      creationAt: "2023-12-27T12:23:28.000Z",
      updatedAt: "2023-12-28T00:48:04.000Z",
    },
  };
  return (
    <div className="flex flex-col py-4 ">
      <div className="flex flex-col gap- md:flex-row md:justify-center  ">
        <div className="flex gap-4 overflow-auto md:w-[50%] md:flex-col md:ml-14 ml-4  ">
          <div className="relative w-[90%] shadow-sm shadow-stronGray md:w-[90%] md:max-w-[600px] shrink-0 ">
            <img
              src={a.images[0]}
              alt={a.title}
              className="w-[100%] h-[100%]"
            />
            <IoMdHeartEmpty className="absolute text-[40px] z-20 top-4 right-4 bg-second rounded-full p-[5px] " />
            <CgArrowsExpandLeft className="absolute text-[34px] z-20 bottom-4 right-4 " />
          </div>
          <img
            src={a.images[1]}
            alt={a.title}
            className="w-[90%] shadow-sm shadow-stronGray md:w-[50%] md:max-w-[200px] "
          />
        </div>
        <div className="flex flex-col gap-2 md:w-[50%] px-4">
          <h3 className="mt-4">Home / Donna / {a.title}</h3>
          <h3 className="font-bold">{a.category.name}</h3>
          <h2 className="font-bold text-[32px]"> {a.title}</h2>
          <div>
            <h3>Codice: {a.category.name}</h3>
            <h3>Garanzia: 24 mesi</h3>
          </div>
          <div className="flex justify-between mb-5">
            <h3 className="text-red text-[20px]">
              {toPercentuagePrice(a.price, 15).toFixed(2)} {"€"}
            </h3>
            <div className="flex gap-2 items-center">
              <h3 className="line-through text-[19px]">
                {a.price.toFixed(2)} {"€"}
              </h3>
              <h3 className="bg-green text-first px-3 py-1 rounded font-semibold">
                -15%
              </h3>
            </div>
          </div>
          <Line width="w-[99%]" selfCenter="" />
          <div className="flex gap-2 items-center ">
            <BsBoxSeam className="fill-green rotate-[-10deg]" />
            <h3 className="text-green">Disponibile </h3>
          </div>
          <Line width="w-[99%]" selfCenter="" />
          <div className="flex flex-col gap-4 items-center  self-center mb-3 md:flex-row mt-2  ">
            <div className="flex items-center gap-2">
              <h3>MISURA</h3>
              <select
                name="width"
                id="width"
                className=" h-[40px] border-2 border-stronGray  p-2 outline-none rounded cursor-pointer"
              >
                <option value="38.5">EU 38.5</option>
              </select>
            </div>
            <Button
              text="AGGIUNGI AL CARRELLO"
              width="w-[210px]"
              position=" self-center"
              textColor="text-first"
              background="bg-black"
              icon="hidden"
              border=""
              textWidth="text-[14px]"
              padding="p-4"
              fontWidth="font-bold"
            />
          </div>
          <div className="my-12 md:my-3">
            <h3>PUNTI DI FORZA</h3>
            <ul className="flex flex-col bg-second font-medium [&>li]:p-5 [&>li]:gap-6 [&>li]:flex [&>li]:items-center ">
              <li>
                <AiTwotoneSafetyCertificate />
                <span> Lorem ipsum dolor</span>
              </li>
              <Line width="w-[90%] " selfCenter="self-center" />
              <li>
                <AiTwotoneSafetyCertificate />
                <span> Sit amet consectetur</span>
              </li>
              <Line width="w-[90%] " selfCenter="self-center" />
              <li>
                <AiTwotoneSafetyCertificate />
                <span> Adipisicing elit libero</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:px-16 md:pt-10 px-4">
        <h2 className="font-bold text-[30px]">Descrizione</h2>
        <p>{a.description}</p>

        <h3 className="font-bold"> Vantaggi</h3>
        <ul className="list-disc px-4">
          <li> Lorem ipsum dolor sit amet consectetur adipisicing. </li>
          <li> Lorem ipsum dolor sit amet consectetur adipisicing. </li>
          <li> Lorem ipsum dolor sit amet consectetur adipisicing. </li>
        </ul>

        <h3 className="font-bold"> Dettagli prodotto</h3>
        <ul className="list-disc px-4">
          <li> Lorem ipsum dolor sit amet consectetur adipisicing. </li>
          <li> Lorem ipsum dolor sit amet consectetur adipisicing. </li>
          <li> Lorem ipsum dolor sit amet consectetur adipisicing. </li>
        </ul>
      </div>
    </div>
  );
};

export default PageCard;

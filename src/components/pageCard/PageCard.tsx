import { BsBoxSeam } from "react-icons/bs";
import Button from "../button";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

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
    <div className="flex flex-col border-2">
      <div>
        <img src={a.images[0]} alt={a.title} className="w-[80%]" />
        <h3>Home / Donna / {a.title}</h3>
        <h3 className="font-bold">{a.category.name}</h3>
        <h2 className="font-bold"> {a.title}</h2>
        <div className="flex justify-between">
          <h3 className="text-red">
            {" "}
            {a.price} {"€"}{" "}
          </h3>
          <h3> {a.price}</h3>
        </div>

        <hr className="bg-stronGray w-[99%] h-[2px] border-0" />
        <div className="flex gap-2 items-center">
          <BsBoxSeam className="fill-green rotate-[-10deg]" />
          <h3 className="text-green">Disponibile </h3>
        </div>
        <hr className="bg-stronGray w-[99%] h-[2px] border-0" />
        <Button text="AGGIUNGI AL CARRELLO" />
      </div>
      <div>
        <h3>PUNTI DI FORZA</h3>
        <ul className="bg-second font-medium">
          <li className="flex items-center gap-6">
            <AiTwotoneSafetyCertificate />
            <span> Lorem ipsum dolor</span>
          </li>
          <hr className="bg-stronGray w-[99%] h-[2px] border-0" />
          <li className="flex items-center gap-6">
            <AiTwotoneSafetyCertificate />
            <span> Sit amet consectetur</span>
          </li>
          <hr className="bg-stronGray w-[99%] h-[2px] border-0" />
          <li className="flex items-center gap-6">
            <AiTwotoneSafetyCertificate />
            <span> Adipisicing elit libero</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Descrizione</h2>
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

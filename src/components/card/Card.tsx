import { cardType } from "@/mocks/types";
import { IoMdHeartEmpty } from "react-icons/io";

export const Card = () => {
  const prova: cardType = {
    id: 108,
    title: "changed!",
    price: 10,
    description: "A description",
    images: ["https://i.imgur.com/1twoaDy.jpeg"],
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
    },
  };

  return (
    <div className="h-[40vh] w-[85vw] relative flex flex-col justify-center shadow-md rounded-md ">
      <div className="h-[50%] md:w-[50%] relative ">
        <div className="z-10 absolute top-0 right-0 w-full h-full bg-[#00000015]"></div>
        <img
          className="w-[100%] h-[100%] object-fill rounded-t-md "
          src={prova.images[0]}
          alt={prova.title}
        />
        <div className="h-[35px] w-[35px] absolute rounded-full bg-second top-2 right-2 flex justify-center items-center z-20 ">
          <IoMdHeartEmpty className="text-[26px]" />
        </div>
        <div className="absolute bottom-2 left-2 bg-second p-1 px-2 z-20">
          <p>Novità</p>
        </div>
      </div>
      <div className=" h-[50%] flex flex-col justify-center items-center">
        <h3 className="font-bold"> {prova.title}</h3>
        <h3>{prova.description}</h3>
        <h4>
          {" "}
          {prova.price} {"€"}
        </h4>
      </div>
    </div>
  );
};

export default Card;

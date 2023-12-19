import { cardType } from "@/mocks/types";

export const Card = () => {
  const prova: cardType = {
    id: 108,
    title: "changed!",
    price: 10,
    description: "A description",
    images: ["https://placeimg.com/640/480/any"],
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
    },
  };

  return (
    <div className="h-[40vh] w-[85vw] relative flex flex-col justify-center border-2 border-red">
      <img
        className="w-[40%] md:w-[50%] "
        src={prova.images[0]}
        alt={prova.title}
      />
      <h3> {prova.title}</h3>
      <h4> {prova.price}</h4>
    </div>
  );
};

export default Card;

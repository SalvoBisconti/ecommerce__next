import { BsBoxSeam } from "react-icons/bs";

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
        <h3>{a.category.name}</h3>
        <h2> {a.title}</h2>
        <div className="flex justify-between">
          <h3 className="text-red">
            {" "}
            {a.price} {"€"}{" "}
          </h3>
          <h3> {a.price}</h3>
        </div>

        <div className="flex gap-2 items-center">
          <BsBoxSeam className="fill-green rotate-[-10deg]" />
          <h3 className="text-green">Disponibile </h3>
        </div>
      </div>
    </div>
  );
};

export default PageCard;

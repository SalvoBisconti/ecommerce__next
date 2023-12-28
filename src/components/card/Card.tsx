import { cardType } from "@/mocks/types";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRouter } from "next/router";

export const Card = (props: { data: cardType }) => {
  const { data } = props;

  const router = useRouter();

  const onHandleOpenSingleItem = (): any => {
    router.push({
      pathname: "product",
      query: {
        id: data.id,
      },
    });
  };

  return (
    <div
      className="h-[400px] w-[315px] relative flex flex-col justify-center shadow-md rounded-md cursor-pointer "
      onClick={onHandleOpenSingleItem}
    >
      <div className="h-[50%] relative ">
        <div className="z-10 absolute top-0 right-0 w-full h-full bg-[#00000015]"></div>
        <img
          className="w-[100%] h-[100%] object-fill rounded-t-md "
          src={data.images[0]}
          alt={data.title}
        />
        <div className="h-[35px] w-[35px] absolute rounded-full bg-second top-2 right-2 flex justify-center items-center z-20 ">
          <IoMdHeartEmpty className="text-[26px]" />
        </div>
        <div className="absolute bottom-2 left-2 bg-second p-1 px-2 z-20">
          <p>Novità</p>
        </div>
      </div>
      <div className=" h-[50%] flex flex-col justify-center items-center">
        <h3 className="font-bold"> {data.title}</h3>
        <h3>{data.description}</h3>
        <h4>
          {data.price} {"€"}
        </h4>
      </div>
    </div>
  );
};

export default Card;

import { cardType } from "@/mocks/types";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRouter } from "next/router";
import { toPercentuagePrice } from "@/utils/funcs";

export const Card = (props: { data: cardType }) => {
  const { data } = props;
  const router = useRouter();

  const onHandleOpenSingleItem = (): void => {
    router.push({
      pathname: "product",
      query: {
        id: data.id,
      },
    });
  };

  return (
    <div
      className="h-[450px] w-[320px] min-w-[310px] relative flex flex-col justify-center shadow-md rounded-md cursor-pointer  "
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
          <p className="text-[13px]">Novità</p>
        </div>
      </div>
      <div className=" h-[50%] flex flex-col justify-center items-center">
        <h3 className="font-bold"> {data.title}</h3>
        <h3 className="p-4">
          {data.description.split(" ").slice(0, 5).join(" ")} {". . ."}
        </h3>
        <h3 className="text-red text-[20px] mb-1 ">
          {toPercentuagePrice(data.price, 15).toFixed(2)} {"€"}
        </h3>
        <div className="flex gap-2 items-center ">
          <h3 className="line-through text-[18px]">
            {data.price.toFixed(2)} {"€"}
          </h3>
          <h3 className="bg-green text-first px-2 py-[1px] rounded text-[15px] font-semibold">
            -15%
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;

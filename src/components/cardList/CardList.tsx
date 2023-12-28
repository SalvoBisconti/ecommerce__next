import Card from "../card";
import { GET } from "@/utils/funcs";
import { useState, useEffect } from "react";
import { cardType } from "@/mocks/types";

const CardList = () => {
  const [productsData, setProductsData] = useState<cardType[]>([]);

  useEffect(() => {
    GET().then((data) => setProductsData(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-8 md:flex-row">
      {productsData.map((product) => (
        <Card data={product} key={product.id} />
      ))}
    </div>
  );
};

export default CardList;

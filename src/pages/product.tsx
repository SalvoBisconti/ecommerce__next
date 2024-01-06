import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { GET } from "@/utils/funcs";
import { useState } from "react";
import React from "react";
import Carousel from "@/components/carousel";
import CardPage from "@/components/cardPage";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [singleProductData, setSingleProductData] = useState<any>();

  React.useEffect(() => {
    if (router.isReady) {
      GET(id).then((data) => setSingleProductData(data));
    }
  }, [router.isReady, id]);

  return (
    <main className={`flex min-h-screen flex-col items-center gap-8 bg-first `}>
      <Layout>
        <CardPage data={singleProductData} />
        <h2 className="font-bold text-[28px] px-10"> Guarda anche</h2>
        <Carousel />
      </Layout>
    </main>
  );
}

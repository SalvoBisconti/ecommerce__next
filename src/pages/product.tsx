import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { GET } from "@/utils/funcs";
import { cardType } from "@/mocks/types";
import { useState, useEffect } from "react";
import PageCard from "@/components/pageCard";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const [singleProductData, setSingleProductData] = useState<cardType[]>([]);
  useEffect(() => {
    GET(id).then((data) => setSingleProductData(data));
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center gap-8 bg-first `}>
      <Layout>
        <h1> </h1>
        <PageCard />
      </Layout>
    </main>
  );
}

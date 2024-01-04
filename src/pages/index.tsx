import CardList from "@/components/cardList";
import FilterArea from "@/components/filterArea";
import NewletterArea from "@/components/newletterArea";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 bg-first  `}
    >
      <Layout>
        <FilterArea />
        <CardList />
        <NewletterArea />
      </Layout>
    </main>
  );
}

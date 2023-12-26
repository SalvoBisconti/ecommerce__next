import CardList from "@/components/cardList";
import FilterArea from "@/components/filterArea";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center gap-8  `}>
      <Navbar />
      <FilterArea />
      <CardList />
    </main>
  );
}

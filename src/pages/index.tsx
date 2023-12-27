import CardList from "@/components/cardList";
import FilterArea from "@/components/filterArea";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewletterArea from "@/components/newletterArea";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center gap-8 bg-first `}>
      <Navbar />
      <FilterArea />
      <CardList />
      <NewletterArea />
      <Footer />
    </main>
  );
}

import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col  `}>
      <Navbar />
      <Card />
    </main>
  );
}

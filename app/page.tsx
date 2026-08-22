import Hero from "@/components/home/Hero";
import Mocsi from "@/components/home/Mocsi";
import NewsUpdates from "@/components/home/NewsUpdates";

export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Mocsi />
      <NewsUpdates />
    </div>
  );
}

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import MocsiTeaser from "@/components/home/DatacenterBlock";
import PartnerFeature from "@/components/home/PartnerFeature";
import BlogRoll from "@/components/home/BlogRoll";

export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Services />
      <MocsiTeaser />
      <PartnerFeature />
      <BlogRoll />
    </div>
  );
}

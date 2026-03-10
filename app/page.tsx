import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PartnerFeature from "@/components/home/PartnerFeature";
import CommunityAgents from "@/components/home/CommunityAgents";
import DatacenterBlock from "@/components/home/DatacenterBlock";
import BlogRoll from "@/components/home/BlogRoll";

export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Services />
      <PartnerFeature />
      <CommunityAgents />
      <DatacenterBlock />
      <BlogRoll />
    </div>
  );
}

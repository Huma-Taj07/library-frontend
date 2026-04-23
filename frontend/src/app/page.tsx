import HeroSection from "@/components/sections/HeroSection";
import FeaturedDiaries from "@/components/sections/FeaturedDiaries";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import StatsSection from "@/components/sections/StatsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <StatsSection />
      <FeaturedDiaries />
      <NewsletterSection />
    </>
  );
}

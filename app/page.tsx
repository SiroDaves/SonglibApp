import Features from "@/components/app/home/Features";
import HeroSection from "@/components/app/home/HeroSection";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <Features />
    </div>
  );
};

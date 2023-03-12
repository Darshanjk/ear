export const metadata = {
  title: "OtoScopeAI | A Healthcare App",
};

import Features from "@/app/features";
import Header from "@/app/header";
import Footer from "@/app/footer";
import HeroSection from "@/app/heroSection";
import Cta from "./cta";
import FeaturesList from "./featuresList";
import WorkList from "./how_it_works";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50/50">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex flex-col space-y-10 px-4">
        {/* Hero Section  */}
        <HeroSection />

        {/* Features */}
        <Features />

        {/* Features List */}
        <FeaturesList />

        {/* CTA */}
        <Cta />


    {/* How it works */}
        <WorkList/>
      </main>
      <Footer />
    </div>
  );
}

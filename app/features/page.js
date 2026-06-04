import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CapabilitiesSection from "../components/features/CapabilitiesSection";
import PPCIntelligenceSection from "../components/features/PPCIntelligenceSection";
import SmartDropshipSection from "../components/features/SmartDropshipSection";
import SmartShippingSection from "../components/features/SmartShippingSection";
import AnalyticsInsightsSection from "../components/features/AnalyticsInsightsSection";

export const metadata = {
  title: "Features | Growve",
  description:
    "Explore Growve's powerful features — Amazon & Flipkart API integration, PPC intelligence, SmartDropship, smart shipping, and analytics.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <CapabilitiesSection />
        <PPCIntelligenceSection />
        <SmartDropshipSection />
        <SmartShippingSection />
        <AnalyticsInsightsSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

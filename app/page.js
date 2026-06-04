import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Integrations from "./components/Integrations";
import Setup from "./components/Setup";
import BudgetManagement from "./components/BudgetManagement";
import ShipmentCommunication from "./components/ShipmentCommunication";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <HowItWorks />
        <Integrations />
        <Setup />
        <BudgetManagement />
        <ShipmentCommunication />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

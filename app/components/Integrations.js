import Image from "next/image";
import Link from "next/link";
import build from "../assets/build.png";

const integrations = [
  { name: "Shopify", initial: "S", color: "bg-green-100 text-green-700" },
  { name: "Amazon", initial: "A", color: "bg-orange-100 text-orange-700" },
  { name: "Flipkart", initial: "F", color: "bg-blue-100 text-blue-700" },
  { name: "FedEx", initial: "FX", color: "bg-purple-100 text-purple-700" },
  { name: "DHL", initial: "D", color: "bg-yellow-100 text-yellow-700" },
  { name: "BlueDart", initial: "BD", color: "bg-red-100 text-red-700" },
  { name: "WooCommerce", initial: "W", color: "bg-indigo-100 text-indigo-700" },
  { name: "Delhivery", initial: "DL", color: "bg-teal-100 text-teal-700" },
];

export default function Integrations() {
  return (
    <section className="bg-violet-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold border border-violet-200">
            Integration
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center max-w-3xl mx-auto leading-tight">
          Built to connect with the{" "}
          <span className="text-violet-600">tools you already trust</span>
        </h2>

        <p className="mt-5 text-lg text-gray-500 text-center max-w-2xl mx-auto">
          Growve plugs into your existing commerce stack — marketplaces, courier
          partners, ERPs, and payment gateways — with minimal setup and maximum
          reliability.
        </p>

        {/* Integration Hub Graphic */}
<div className="relative mt-16 rounded-[40px] overflow-hidden bg-gradient-to-b from-violet-100 via-pink-50 to-white py-20">

  {/* Light vertical rays */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:40px_100%] opacity-30"></div>

  {/* Glow center */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-[500px] h-[300px] bg-pink-300 blur-[120px] opacity-40 rounded-full"></div>
  </div>

  {/* Integration Image */}
  <div className="relative flex justify-center items-center">
    <Image
      src={build}
      alt="Integrations"
      className="w-[800px] max-w-full object-contain opacity-90"
    />
  </div>

  {/* Center Content */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-20">

  <h5 className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-snug">
    +18 Smooth-running integrations
  </h5>

  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-500 max-w-xs sm:max-w-md">
    Your favourite tools, finally working together
  </p>

</div>

 
</div>
      </div>
    </section>
  );
}

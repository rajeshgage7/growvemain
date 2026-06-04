"use client";
import { motion } from "framer-motion";
import smartship from "../../assets/smartship.png";
import Image from "next/image";

const leftFeatures = [
  {
    number: "1",
    title: "Unified order management",
    description: "Centralize orders from marketplaces like Amazon, Flipkart, Meesho, Shopify, Myntra...",
  },
  {
    number: "2",
    title: "Courier partner integration",
    description: "Connect with 15+ trusted courier services, instantly compare rates",
  },
  {
    number: "3",
    title: "Smart Label & Order Processing",
    description: "Generate shipping labels, invoices, and bulk orders in one click",
  },
  {
    number: "4",
    title: "Shipping Cost Analytics",
    description: "Analyze delivery costs and performance to optimize logistics efficiency",
  },
];

const rightFeatures = [
  {
    number:"1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Real-Time Shipment Tracking",
    description:
      "Get live updates on all shipments, ensuring transparency and allowing proactive issue resolution.",
  },
  {
    number:"2",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Automated Carrier Routing",
    description:
      "Intelligently route packages through the fastest and most cost-effective carriers to save time and money.",
  },
  {
    number:"3",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    title: "Cost & Performance Analytics",
    description:
      "Analyze shipping performance, costs per order, and delivery efficiency to continually optimize your logistics strategy.",
  },
];

export default function SmartShippingSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #F8F7FF 0%, #F4F3FE 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-600 text-white text-xs font-semibold tracking-wide uppercase">
            Smart Shipping
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Smart Shipping Multi-Channel{" "}
            <span className="text-violet-600">Excellence</span>
          </h2>
          <p className="mt-3 text-xl font-semibold text-gray-700">Smarter, Faster, Cheaper Shipping</p>
          <p className="mt-4 text-md text-gray-500 leading-relaxed">
            Growve&apos;s smart shipping platform brings every order, courier, and delivery update into one simple
            dashboard. Whether you sell on Amazon, Flipkart, Meesho, Shopify, WooCommerce, or your own website, Smart
            Shipping helps you save time, reduce costs, and delight customers.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">

  {/* LEFT → comes from LEFT */}
  <motion.div
    initial={{ opacity: 0, x: -80, scale: 0.97 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 60, damping: 18 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="relative rounded-2xl overflow-hidden">
      <Image
        src={smartship}
        alt="SmartDropship platform"
        className="w-full h-[500px] sm:h-[550px] lg:h-[650px] object-cover rounded-2xl"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 rounded-2xl" />

      {/* Overlay cards (stagger animation) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-2 sm:gap-3 p-3 sm:p-5 lg:p-7 z-10">
        {leftFeatures.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.12,
            }}
            viewport={{ once: true }}
            className="flex items-start sm:items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 text-white text-sm font-bold flex items-center justify-center">
              {i + 1}
            </div>

            <div className="flex-1 min-w-0 px-0 sm:px-3 lg:px-6">
              <h5 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {card.title}
              </h5>
              <p className="text-[11px] sm:text-xs text-white/65 leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-orange-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>

  {/* RIGHT → comes from RIGHT */}
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Heading */}
    <div className="mb-10">
      <h3 className="text-4xl font-bold text-[#1D667D] leading-tight mb-4">
        Smart Shipping &amp; Delivery Management
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        Unify courier services and sales channels into one powerful dashboard. Automate shipping workflows with cost comparisons, smart routing, and instant label generation while ensuring seamless delivery experiences for customers.
      </p>
    </div>

    {/* Features */}
    <div className="space-y-8">
      {rightFeatures.map((feat, index) => (
        <motion.div
          key={feat.number}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.12,
          }}
          viewport={{ once: true }}
        >
          <div className="w-9 h-9 rounded-xl bg-violet-100 text-gray-600 flex items-center justify-center mb-3">
            {feat.icon}
          </div>

          <h4 className="text-sm font-bold text-gray-900 mb-1">
            {feat.title}
          </h4>

          <p className="text-sm text-gray-500 leading-relaxed">
            {feat.description}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>

</div>
      </div>
    </section>
  );
}

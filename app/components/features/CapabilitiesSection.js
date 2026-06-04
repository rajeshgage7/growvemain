"use client";
import { motion } from "framer-motion";

const capabilityCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
      </svg>
    ),
    title: "Unified Order Management",
    description: "Track statuses, automate updates, and fulfil faster with less manual effort",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 0 0-4-4H8m0 0-3 3m3-3-3 3m9 7H7a2 2 0 0 1-2-2v-1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17H3m0 0v-6m0 6 3-3m-3 3 3 3" />
      </svg>
    ),
    title: "Simplified Returns Handling",
    description: "Get clear visibility into return reasons without switching platforms",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
      </svg>
    ),
    title: "Real-Time Inventory Sync",
    description: "Prevent overselling and ensure smooth, interruption-free operations",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Financial & Sales Report",
    description: "Access detailed sales, revenue, and settlement reports instantly",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Secure API Access",
    description: "Ensure secure, compliant, and reliable integrations at scale",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Scalable Platform",
    description: "Designed to grow with your business without performance limits",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold tracking-wide uppercase">
            Capabilities
          </span>
        </div>

        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: -60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 60, damping: 18 }}
  viewport={{ once: true }}
  className="text-center max-w-3xl mx-auto mb-6"
>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
    Seamless Amazon SP-API & Flipkart API Integration{" "}
    <span className="text-violet-600">by Growve Retail</span>
  </h2>

  <p className="mt-5 text-lg text-gray-500 leading-relaxed">
    Growve simplifies multi-channel eCommerce by seamlessly integrating Amazon and Flipkart through powerful APIs. Automate inventory, orders, and insights to reduce errors and scale faster.
  </p>
</motion.div>

        {/* Cards Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
  {capabilityCards.map((card, index) => {

    let initialX = 0;
    let initialY = 0;

    if (index === 0 || index === 3) {
      initialX = -80; // LEFT
    } else if (index === 2 || index === 5) {
      initialX = 80; // RIGHT
    } else {
      initialY = 80; // BOTTOM (index 1,4)
    }

    return (
      <motion.div
        key={card.title}
        initial={{
          opacity: 0,
          x: initialX,
          y: initialY,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          delay: index * 0.1,
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-200"
      >
        <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-200">
          {card.icon}
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2">
          {card.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          {card.description}
        </p>
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}

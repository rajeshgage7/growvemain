"use client";
import { motion } from "framer-motion";
import smartdrop from "../../assets/smartdrop.jpg";
import Image from "next/image";

const leftFeatures = [
  {
    number: "1",
    title: "Smart Inventory & Pricing Automation",
    description:
      "Combine SP-API catalog data with supplier feeds to create a consolidated inventory view. Automatic repricing rules that account for supplier costs, shipping, amazon fees, and target margins. Get alerts for supplier stocks, delays, or cost increases to maintain competitiveness without over-promising delivery times.",
  },
  {
    number: "2",
    title: "Return Processing",
    description:
      "Pull Amazon returns data and route to suppliers for resolution. Manage RMA workflows with visibility on refund speed.",
  },
  {
    number: "3",
    title: "Compliance Reporting",
    description:
      "Fetch settlement and MTR reports for GST/TDS filings. Track per-order and per-SKU profitability including all costs.",
  },
  {
    number: "4",
    title: "Performance Analytics",
    description:
      "Monitor KPIs across the full chain; order performance, supplier SLA, courier performance, and policy compliance.",
  },
];

const rightCards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Real-time stock synchronization",
    description: "Sync inventory automatically across marketplaces to prevent overselling",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: "Competitive pricing analysis",
    description: "Monitor competitor prices and optimize margins with automated pricing insights",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487 18.5 2.85a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    title: "Automatic listing updates",
    description: "Keep product listings updated automatically based on inventory, pricing, & supplier data",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
    title: "Buy box competitiveness alerts",
    description: "Get instant alerts when pricing or stock impacts your Buy Box visibility",
  },
];

export default function SmartDropshipSection() {
  return (
<section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold tracking-wide uppercase">
            SmartDropship
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Simplify Your E-Commerce Operations{" "}
            <span className="text-violet-600">with SmartDropship</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Streamline orders, inventory, supplier coordination, and financial tracking across marketplaces like Amazon
            and Flipkart all from one powerful automation platform.
          </p>
        </div>

        {/* Two-column layout */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

  {/* LEFT → from LEFT */}
  <motion.div
    initial={{ opacity: 0, x: -80, scale: 0.97 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 60, damping: 18 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Big feature */}
    <div className="mb-10">
      <h3 className="text-4xl font-bold text-[#7E5C47] leading-tight mb-4">
        Smart Inventory &amp; Pricing Automation
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        Combine SP-API catalog data with supplier feeds to create a consolidated inventory view. Automatic repricing rules that account for supplier costs, shipping, amazon fees, and target margins. Get alerts for supplier stocks, delays, or cost increases to maintain competitiveness without over-promising delivery times.
      </p>
    </div>

    {/* Features list */}
    <div className="space-y-8">
      {leftFeatures.slice(1).map((feat, index) => (
        <motion.div
          key={feat.number}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          viewport={{ once: true }}
        >
          <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center mb-3">
            {feat.number === "2" && ( <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /> </svg> )} {feat.number === "3" && ( <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /> </svg> )} {feat.number === "4" && ( <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}> <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> </svg> )}
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

  {/* RIGHT → from RIGHT */}
  <motion.div
    initial={{ opacity: 0, x: 80, scale: 0.97 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="relative rounded-2xl overflow-hidden"
  >
    <Image
      src={smartdrop}
      alt="SmartDropship platform"
      className="w-full h-[500px] sm:h-[550px] lg:h-[650px] object-cover rounded-2xl"
    />

    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 rounded-2xl" />

    {/* Overlay cards (stagger from RIGHT) */}
    <div className="absolute inset-0 flex flex-col justify-center gap-2 sm:gap-3 p-3 sm:p-5 lg:p-7 z-10">
      {rightCards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, x: 50 }}
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
  </motion.div>

</div>
      </div>
    </section>
  );
}

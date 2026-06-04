"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Add Company Details",
    description:
      "Enter your business information once to personalise settings, & shipping preferences",
  },
  {
    number: "2",
    title: "Select Company",
    description:
      "Link your eCommerce store to automatically sync orders, products, & inventory",
  },
  {
    number: "3",
    title: "Choose Courier",
    description:
      "Select preferred courier partners based on cost, coverage, & delivery performance",
  },
];

const checkpoints = [
  "Pre-built Platform Templates",
  "Guided Step-by-Step Onboarding",
  "Ready-to-Use Default Settings",
];

export default function Setup() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

  {/* LEFT COLUMN → comes from LEFT */}
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 60, damping: 18 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
      Fast and Effortless Setup
    </h2>

    <p className="mt-5 text-base text-gray-500 leading-relaxed">
     Get started with Growve in minutes, not weeks. Our onboarding flow is designed to remove complexity, allowing teams to connect platforms, configure workflows, and go live without technical dependencies or long setup cycles
       </p>

    <ul className="mt-8 space-y-4">
      {checkpoints.map((point, index) => (
        <motion.li
          key={point}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full text-white bg-[#6C63FF] flex items-center justify-center">
            ✔
          </span>
          <span className="text-gray-700 text-sm font-medium">
            {point}
          </span>
        </motion.li>
      ))}
    </ul>

    <Link
      href="#demo"
      className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-[#6C63FF] hover:bg-violet-700 transition-colors"
    >
      Try our free demo »
    </Link>
  </motion.div>

  {/* RIGHT COLUMN → comes from RIGHT */}
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="bg-gradient-to-b from-[#ecebfe] via-[#D2CEFA] to-[#beb8f6] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20"
  >
    <div className="space-y-4">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-2xl px-4 sm:px-5 py-4 shadow-sm"
        >
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-100 flex items-center justify-center text-[#7367F0] font-semibold text-sm sm:text-base">
            {step.number}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-gray-900 mb-0.5">
              {step.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {step.description}
            </p>
          </div>

          <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-violet-600 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-violet-600"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

</div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import intelligentImg from "../assets/intelligent.png";

const checkpoints = [
  "AI-Powered Courier Recommendations",
  "Cost Breakdown Per Shipment",
  "Optimize Return & RTO Costs",
];

export default function BudgetManagement() {
  return (
    <section className="bg-[#F4F3FE] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

  {/* LEFT → Image (from LEFT) */}
  <motion.div
    initial={{ opacity: 0, x: -80, scale: 0.96 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 60, damping: 18 }}
    viewport={{ once: true, margin: "-100px" }}
    className="bg-white rounded-3xl p-15"
  >
    <div className="flex items-center justify-center">
      <Image
        src={intelligentImg}
        alt="Intelligent Budget & Cost Management Dashboard"
        className="w-full h-auto rounded-2xl"
        priority
      />
    </div>
  </motion.div>

  {/* RIGHT → Content (from RIGHT) */}
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
      Intelligent Budget &amp; Cost Management
    </h2>

    <p className="mt-5 text-base text-gray-500 leading-relaxed">
      Gain complete control over your logistics spend with intelligent cost insights. Growve helps you analyse shipping, returns, and operational expenses in detail so you can make data-driven decisions and continuously optimise profitability
    </p>

    <ul className="mt-8 space-y-5">
      {checkpoints.map((point, index) => (
        <motion.li
          key={point}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.12,
          }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full text-white bg-[#6C63FF] flex items-center justify-center">
            ✔
          </span>
          <span className="text-gray-700 text-base">{point}</span>
        </motion.li>
      ))}
    </ul>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Link
        href="#demo"
        className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#6C63FF] hover:bg-[#5a53e0] transition-colors"
      >
        Try our free demo
      </Link>
    </motion.div>
  </motion.div>

</div>
      </div>
    </section>
  );
}

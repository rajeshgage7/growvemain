"use client";

import Image from "next/image";
import totalprofit from "../assets/totalprofit.png";
import warehousestock from "../assets/worehousestock.png";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const features = [
    {
      title: "Multi-Channel Integration",
      description:
        "Connect & sync orders, inventory, & data across marketplaces, platforms, and sales channels in real time.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      title: "Time-Saving Automation",
      description:
        "Automate everyday logistics & commerce workflows to eliminate manual tasks and reduce operational overhead.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
    },
    {
      title: "Smart Budget Allocation",
      description:
        "Track, control, & optimize logistics and operational costs with intelligent budget insights and reporting.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
      ),
    },
    {
      title: "Unified Operations Visibility",
      description:
        "Manage inventory, orders, shipments, & payments from a single dashboard with complete operational clarity.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold border border-violet-200">
            How it Works
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center max-w-3xl mx-auto leading-tight">
          Where orders, inventory, and shipping{" "}
          <span className="text-violet-600">come together</span>
        </h2>

        <p className="mt-5 text-lg text-gray-500 text-center max-w-2xl mx-auto">
          Growve unifies every touchpoint of your commerce operations into one
          seamless, intelligent platform — so your team can focus on growth, not
          firefighting.
        </p>

        {/* Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{features.map((feature, index) => (
  <motion.div
    key={feature.title}
    initial={{
      opacity: 0,
      x: index < 2 ? -60 : 60,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      scale: 1,
    }}
    transition={{
      type: "spring",
      stiffness: 60,
      damping: 18,
      delay: index * 0.12,
    }}
    viewport={{ once: true, margin: "-50px" }}
    className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:bg-gradient-to-b hover:from-[#E0DDFF] hover:via-[#8E84F8] hover:to-[#4E4A7C] transition-all duration-300 ease-in-out"
  >
    <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:bg-violet-100 group-hover:text-black transition-colors">
      {feature.icon}
    </div>

    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
      {feature.title}
    </h3>

    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white transition-colors">
      {feature.description}
    </p>
  </motion.div>
))}
        </div>

        {/* Two Feature Preview Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
  
  {/* Profit Trends Card (LEFT) */}
  <motion.div
    initial={{ opacity: 0, x: -60, scale: 0.96 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 60,
      damping: 18,
      delay: 0.1,
    }}
    viewport={{ once: true, margin: "-50px" }}
    className="overflow-hidden"
  >
    <div className="flex items-center justify-center mb-5 rounded-2xl bg-gray-50 border border-gray-100 h-72">
      <Image
        src={totalprofit}
        alt="Profit Trends and Financial Performance"
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-1">
      Profit Trends and Financial Performance
    </h3>
    <p className="text-sm text-gray-500">
      Track monthly profit trends and evaluate overall business performance over time
    </p>
  </motion.div>

  {/* Inventory Card (RIGHT) */}
  <motion.div
    initial={{ opacity: 0, x: 60, scale: 0.96 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 60,
      damping: 18,
      delay: 0.2,
    }}
    viewport={{ once: true, margin: "-50px" }}
    className="overflow-hidden"
  >
    <div className="flex items-center justify-center mb-5 rounded-2xl bg-gray-50 border border-gray-100 h-72">
      <Image
        src={warehousestock}
        alt="Warehouse-Wise Inventory & Stock Overview"
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-1">
      Warehouse-Wise Inventory &amp; Stock Overview
    </h3>
    <p className="text-sm text-gray-500">
      View real-time stock distribution across warehouses and available inventory for sale
    </p>
  </motion.div>

</div>
      </div>
    </section>
  );
}

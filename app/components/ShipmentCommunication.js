"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import protectiveImg from "../assets/protective.png";

const checkpoints = [
  "Centralised Shipment Timeline",
  "Exception & Delay Detection",
  "Delivery Performance Insights",
];

export default function ShipmentCommunication() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

  {/* LEFT → Content (from LEFT) */}
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 60, damping: 18 }}  
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
      Proactive Shipment Communication
    </h2>

    <p className="mt-5 text-lg text-gray-500 leading-relaxed">
      Stay in control of every shipment from dispatch to delivery. Growve provides real-time shipment visibility, proactive alerts, and performance insights, helping teams respond faster, reduce delivery issues, and improve customer experience
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
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6C63FF] flex items-center justify-center">
            ✔
          </span>
          <span className="text-gray-700 font-medium">{point}</span>
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
        className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#6C63FF] hover:bg-violet-700 transition-colors"
      >
        Try our free demo
      </Link>
    </motion.div>
  </motion.div>

  {/* RIGHT → Image (from RIGHT) */}
  <motion.div
    initial={{ opacity: 0, x: 80, scale: 0.96 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="bg-gradient-to-b from-[#D2CEFA] via-white to-[#D2CEFA] rounded-3xl flex items-center justify-center"
  >
    <Image
      src={protectiveImg}
      alt="Shipment tracking UI preview"
      className="w-full max-w-lg object-contain mt-15"
      priority
    />
  </motion.div>

</div>
      </div>
    </section>
  );
}

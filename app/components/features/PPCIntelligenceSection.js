"use client";
import { motion } from "framer-motion";

const ppcFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Profit-First PPC Dashboard",
    description:
      "Get instant visibility into true PPC profitability by factoring ad spend, fees, & operational costs. Track what actually drives profit not just clicks & ROAS.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Smart Bid Automation",
    description:
      "Automate bids in real time based on your profit goals, not guesswork. Reduce wasted spend while maximizing conversions with AI-driven optimization.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
      </svg>
    ),
    title: "Keyword Intelligence & Control",
    description:
      "Automatically promote high-converting keywords and eliminate wasteful searches. Keep your PPC structure clean, efficient, and profit-focused 24/7.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    title: "Performance Deep-Dive Analytics",
    description:
      "Analyze performance across campaigns, products, keywords, and ASINs. Understand exactly where profits are made or lost with granular insights.",
  },
];

const chartBars = [
  { month: "Jan", height: 45 },
  { month: "Feb", height: 60 },
  { month: "Mar", height: 52 },
  { month: "Apr", height: 70 },
  { month: "May", height: 88 },
  { month: "Jun", height: 65 },
  { month: "Jul", height: 72 },
  { month: "Aug", height: 58 },
  { month: "Sep", height: 80 },
  { month: "Oct", height: 55 },
  { month: "Nov", height: 68 },
  { month: "Dec", height: 75 },
];

export default function PPCIntelligenceSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #F8F7FF 0%, #F4F3FE 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-600 text-white text-xs font-semibold tracking-wide uppercase">
            PPC Intelligence
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
    PPC Profit Analytics and{" "}
    <span className="text-violet-600">Optimization</span>
  </h2>

  <p className="mt-5 text-lg text-gray-500 leading-relaxed">
    Stop guessing and start profiting. The Growve PPC Optimizer is a automation engine designed specifically for Sellers to convert advertising spend into measurable, sustainable business growth
  </p>
</motion.div>

        {/* Chart Card */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-violet-50 p-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Item Statistic</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-gray-900">4,352</span>
                <span className="text-sm font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+1.34%</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Last 12 Months</p>
              <p className="text-sm font-semibold text-gray-700 mt-0.5">4.8K May 2025</p>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end gap-1.5 h-28 mt-6">
            {chartBars.map((bar) => (
              <div key={bar.month} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-violet-300 hover:bg-violet-600 transition-colors cursor-pointer"
                  style={{ height: `${bar.height}px` }}
                />
                <span className="text-[10px] text-gray-400 font-medium">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
  {ppcFeatures.map((feat, index) => {

    const isLeft = index === 0 || index === 2;

    return (
      <motion.div
        key={feat.title}
        initial={{
          opacity: 0,
          x: isLeft ? -60 : 60,
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
          delay: index * 0.1,
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-200"
      >
        <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-200">
          {feat.icon}
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2">
          {feat.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          {feat.description}
        </p>
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}

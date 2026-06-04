'use client'
import Link from "next/link";
import Image from "next/image";
import dashboardImg from "../assets/growvelanding.png";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden animated-bg">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-purple-400/40 rounded-full blur-3xl animate-blob"></div>

      <div className="absolute top-[120px] right-[-120px] w-[300px] h-[300px] bg-blue-400/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="absolute bottom-[-100px] left-[35%] w-[280px] h-[280px] bg-pink-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Headline */}
      

         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center max-w-3xl mx-auto leading-tight">
          One Platform to Run Your {" "}
          <span className="text-violet-600">Entire Commerce Operations</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We help brands, startups, and logistics companies launch scalable
          shipping and fulfilment platforms with ready-to-integrate modules,
          courier APIs, and cloud infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="px-8 py-3 text-sm font-semibold text-white bg-[#6C63FF] hover:bg-[#5a53e0] rounded-lg transition-colors shadow-md"
          >
            Get Started
          </Link>

          <Link
            href="#features"
            className="px-8 py-3 text-sm font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors shadow-sm"
          >
            Learn More
          </Link>
        </div>

        {/* Dashboard Image */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="rounded-t-2xl overflow-hidden shadow-2xl">
            <Image
              src={dashboardImg}
              alt="Growve Dashboard"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      
    </section>
  );
}
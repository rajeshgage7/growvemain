/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import logo from "../assets/whitelogo.png";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy and Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <footer style={{ background: "#0D0B1E" }}>
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left — Logo + Nav */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
               <Image
                                        src={logo}
                                        alt="Shipment tracking UI preview"
                                        className=" "
                                        priority
                                      />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              One platform to run your entire commerce operations — built for
              brands, startups, and logistics teams.
            </p>
            <nav className="space-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center — Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Company
            </h3>
            <div className="space-y-4">
              <p className="text-sm font-bold text-gray-200">
                Growve Retail &amp; Management Services Private Limited
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>
                    Unit no. 502, Filix Tower, Lal Bahadur Shastri Marg,<br /> opposite Asian. Paints, Sonapur, Bhandup West,<br />
                    Mumbai, Maharashtra 400078
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:hello@growve.in" className="hover:text-violet-400 transition-colors">
                    admin@growve.in
                  </a>
                </div>
              </div>

              {/* Hiring line */}
              <div className="mt-4 p-3 rounded-xl border border-violet-800/50 bg-violet-950/30">
                <p className="text-xs text-gray-400">
                  <span className="text-violet-400 font-semibold">We're hiring!</span> We're looking
                  for talented, passionate folks to join our team.{" "}
                  <Link href="/careers" className="text-violet-400 hover:underline">
                    View openings →
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right — CTA + Branding */}
          <div className="flex flex-col items-start md:items-end">
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/30 mb-8"
            >
              Try our free demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Large wordmark */}
            <div className="mb-4">
              <p className="text-5xl font-black tracking-tight text-white/5 select-none leading-none">
                GROWVE
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Growve.in — All Rights Reserved
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Growve Retail &amp; Management Services Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            Made with care for the Indian commerce ecosystem
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

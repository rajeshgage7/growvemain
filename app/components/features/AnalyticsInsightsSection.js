const stats = [
  {
    value: "13+",
    label: "Multi-Courier Visibility",
    description: "Evaluate performance across all shipping providers in a single dashboard",
  },
  {
    value: "99%",
    label: "Robust Uptime",
    description: "Depend on a stable, high-performance platform designed for scale",
  },
  {
    value: "24/7",
    label: "24/7 Assistance",
    description: "Get continuous support to resolve queries & keep operations smooth",
  },
];

const returnsCards = [
  {
    number: "01",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
      </svg>
    ),
    title: "Hassle-Free Returns",
    description: "Simplify returns and RTO handling with smart insights, automated re-delivery, and better recovery rates.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
    title: "Seamless COD Settlement",
    description: "Track COD payments automatically with reconciliation, delay alerts, and accurate financial reporting.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: "Transparent Refund Tracking",
    description: "Monitor refunds in real time with full visibility into pending, approved, and completed reimbursements.",
  },
];

export default function AnalyticsInsightsSection() {
  return (
    <>
      {/* Analytics & Performance Insights */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Analytics &amp; Performance{" "}
              <span className="text-violet-600">Insights</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Unlock comprehensive analytics on logistics costs, courier reliability, order lifecycle, and revenue leakage
              from returns. Export reports seamlessly for GST, compliance filings or integration with your accounting tools.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-violet-200 hover:bg-violet-50 transition-all duration-200">
                <p className="text-5xl font-extrabold text-violet-600 mb-2">{stat.value}</p>
                <p className="text-base font-bold text-gray-900 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Returns & Payment Automation */}
      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #F8F7FF 0%, #F4F3FE 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Returns &amp; Payment{" "}
              <span className="text-violet-600">Automation</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Easily manage returns, failed deliveries, and COD payments with complete visibility across couriers.
              Automate reconciliation, reduce losses, and keep your finances accurate and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {returnsCards.map((card) => (
              <div
                key={card.number}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold text-violet-100 group-hover:text-violet-200 transition-colors">
                    {card.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors duration-200">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

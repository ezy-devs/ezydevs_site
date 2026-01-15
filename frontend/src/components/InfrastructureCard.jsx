// components/InfrastructureCard.jsx
export default function InfrastructureCard() {
  return (
     <section
        id="infrastructure"
        className="py-24 bg-slate/30 border-y border-steel/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Core Infrastructure
            </h2>
            <p className="font-mono text-emerald/80 text-sm">
              PROTOCOL LEVEL ECOSYSTEM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 border border-steel/10 bg-void hover:border-emerald/40 transition-all duration-500">
              <div className="w-12 h-12 bg-slate mb-6 flex items-center justify-center border border-steel/10 group-hover:border-emerald/50">
                <svg
                  className="w-6 h-6 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.59-4.18M5.55 17.55l-1-1a30 30 0 006.05-6.05l1 1c1.66 1.66 2.05 4.25.95 6.15-1.1 1.9-3.7 2.3-5.35.65z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-3">
                Identity Infrastructure
              </h3>
              <p className="text-sm text-steel/70 leading-relaxed mb-6">
                Verifiable, portable, and secure digital identity. A unified
                layer for KYC, document verification, and biometric
                authentication.
              </p>
              <ul className="space-y-2 font-mono text-xs text-emerald/80">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Biometric
                  Integration
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>RBAC Systems
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Sovereign
                  Data
                </li>
              </ul>
            </div>

            <div className="group p-8 border border-steel/10 bg-void hover:border-emerald/40 transition-all duration-500">
              <div className="w-12 h-12 bg-slate mb-6 flex items-center justify-center border border-steel/10 group-hover:border-emerald/50">
                <svg
                  className="w-6 h-6 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-3">
                Business Infrastructure
              </h3>
              <p className="text-sm text-steel/70 leading-relaxed mb-6">
                Rails for commerce and compliance. Structuring unstructured data
                to facilitate secure value exchange between entities.
              </p>
              <ul className="space-y-2 font-mono text-xs text-emerald/80">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Payment
                  Orchestration
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Automated
                  Compliance
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Registry
                  Management
                </li>
              </ul>
            </div>

            <div className="group p-8 border border-steel/10 bg-void hover:border-emerald/40 transition-all duration-500">
              <div className="w-12 h-12 bg-slate mb-6 flex items-center justify-center border border-steel/10 group-hover:border-emerald/50">
                <svg
                  className="w-6 h-6 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-3">
                Intelligence Infrastructure
              </h3>
              <p className="text-sm text-steel/70 leading-relaxed mb-6">
                Turning raw data into national assets. Privacy-preserving
                analytics for high-level governance and planning.
              </p>
              <ul className="space-y-2 font-mono text-xs text-emerald/80">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Predictive
                  Modeling
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Population
                  Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald mr-2"></span>Resource
                  Tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

  )
}

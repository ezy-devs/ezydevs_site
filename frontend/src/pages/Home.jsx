import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ApiSnippet from "../components/ApiSnippet";
import InfrastructureCard from "../components/InfrastructureCard";
import InfrastructureBackground from "../components/InfrastructureBackground";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

// Animation variant for section reveals
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function Home() {
  return (
    <div className="bg-void text-steel font-sans antialiased selection:bg-emerald/30">
      <Header />

      {/* HERO SECTION */}
      <main className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden bg-void">
        <InfrastructureBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <span className="text-emerald font-mono text-xs uppercase border-l-2 border-emerald pl-4 tracking-widest">
              System Status: Operational
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-7xl font-light text-white mt-8 max-w-4xl tracking-tight leading-[1.1]"
          >
            Building Africa’s <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald to-white">
              Digital Infrastructure.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-steel/80 max-w-2xl font-light leading-relaxed"
          >
            Secure identity, business, and intelligence systems designed for
            continental scale. We engineer the sovereign rails for the future of
            African commerce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <Link
              to="/partnership"
              className="bg-emerald text-void px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-highlight transition-all"
            >
              Initiate Partnership
            </Link>
            <a
              href="#architecture"
              className="border border-steel/30 px-10 py-4 text-white uppercase text-xs tracking-widest hover:border-emerald hover:text-emerald transition-all"
            >
              View Architecture
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="font-mono text-[10px] text-steel/30 space-y-1 text-right italic">
            <p>NILE_PROTOCOL_INITIATED</p>
            <p>ENCRYPTION_LAYER: ACTIVE</p>
            <p>GEO_LOC: 7.7122° N, 8.9818° E</p>
          </div>
        </div>
      </main>

      {/* INFRASTRUCTURE PILLARS */}
      <InfrastructureCard />

      {/* COMPLIANCE SECTION */}
      <motion.section
        {...fadeInUp}
        className="py-20 border-b border-steel/5 bg-void"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-light text-white mb-4">
                Certified for Sovereignty
              </h2>
              <p className="text-steel/70 leading-relaxed mb-6">
                We maintain the highest standards of data residency and
                cryptographic security. OmniNile infrastructure is audited for
                compliance with global and African regulatory frameworks.
              </p>
              <a
                href="#"
                className="text-emerald text-sm font-mono hover:underline inline-flex items-center gap-2"
              >
                Download Security Whitepaper <span>&rarr;</span>
              </a>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["ISO 27001", "NDPR", "PCI DSS", "GDPR"].map((cert) => (
                <div
                  key={cert}
                  className="border border-steel/10 p-4 flex flex-col items-center justify-center text-center hover:border-emerald/30 transition-colors bg-slate/10"
                >
                  <span className="font-mono text-lg text-white font-bold block mb-1">
                    {cert.split(" ")[0]}
                  </span>
                  <span className="text-[10px] text-steel/50 uppercase tracking-wider">
                    {cert.split(" ").slice(1).join(" ") || "Compliant"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* PLATFORMS (LumiID & Tersai) */}
      <section id="platforms" className="py-24 space-y-24">
        {/* LumiID */}
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate border border-steel/10 p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="text-emerald font-mono text-xs uppercase tracking-widest mb-2 block">
                Identity Layer
              </span>
              <h3 className="text-3xl text-white font-semibold mb-6">LumiID</h3>
              <p className="text-steel/80 mb-8 leading-relaxed">
                LumiID is the standard for digital trust. It bridges the gap
                between physical existence and digital recognition, ensuring
                that every interaction is authenticated.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Universal KYC", "Fraud Detection", "API-First"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-void border border-emerald/20 text-xs font-mono text-emerald rounded"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <ApiSnippet />
          </div>
        </motion.div>

        {/* Tersai */}
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate/40 border border-steel/10 p-8 lg:p-16 flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <span className="text-emerald font-mono text-xs uppercase tracking-widest mb-2 block">
                Business Infrastructure (OS)
              </span>
              <h2 className="text-3xl text-white font-semibold mb-6">Tersai</h2>
              <p className="text-steel/80 mb-8 leading-relaxed">
                Tersai is the foundational Operating System for African
                enterprise. It provides core logic for business management and
                operational transparency.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="h-1 w-4 bg-emerald mt-2 mr-3"></div>
                  <p className="text-xs text-steel/60">
                    <strong className="text-white block">
                      Process Orchestration
                    </strong>{" "}
                    Automation of complex workflows.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-1 w-4 bg-emerald mt-2 mr-3"></div>
                  <p className="text-xs text-steel/60">
                    <strong className="text-white block">
                      Resource Planning
                    </strong>{" "}
                    Scalable asset management.
                  </p>
                </div>
              </div>
            </div>

            {/* Kernel UI Visual */}
            <div className="lg:w-1/2 w-full bg-[#050505] border border-steel/10 p-6 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-steel/10 pb-4 mb-4">
                <span className="text-emerald">KERNEL_OS_v2.0</span>
                <span className="text-steel/40">Uptime: 99.99%</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between border-l border-emerald pl-2 bg-emerald/5 py-1">
                  <span>VALIDATION_DAEMON</span>
                  <span className="text-emerald">ACTIVE</span>
                </div>
                <div className="flex justify-between border-l border-steel/20 pl-2 py-1 opacity-50">
                  <span>LEGACY_BRIDGE</span>
                  <span>STABLE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* ECOSYSTEM INTEGRATIONS */}
      <motion.section
        {...fadeInUp}
        className="py-24 bg-void border-t border-steel/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-sm font-mono text-emerald uppercase tracking-[0.3em] mb-12">
            Integrated with Global Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            {/* Replace these with actual SVGs of tech partners or standards */}
            <div className="flex items-center justify-center h-12 border border-steel/10 px-4 py-2">
              SWIFT
            </div>
            <div className="flex items-center justify-center h-12 border border-steel/10 px-4 py-2">
              ISO 20022
            </div>
            <div className="flex items-center justify-center h-12 border border-steel/10 px-4 py-2">
              AWS
            </div>
            <div className="flex items-center justify-center h-12 border border-steel/10 px-4 py-2">
              STARKNET
            </div>
            <div className="flex items-center justify-center h-12 border border-steel/10 px-4 py-2">
              NIBSS
            </div>
            <div className="flex items-center justify-center h-12 border border-steel/10 px-4 py-2">
              GSMA
            </div>
          </div>
        </div>
      </motion.section>
      {/* DEVELOPER EXPERIENCE (Built for Builders) */}
      <motion.section {...fadeInUp} className="py-24 bg-slate/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              Built for Builders
            </h2>

            <p className="text-steel/70 max-w-2xl">
              Infrastructure that gets out of your way. Integrate our Identity
              and Logic layers with{" "}
              <span className="text-white">3 lines of code</span> using our
              native SDKs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg bg-[#050505] border border-steel/10 p-6 font-mono text-sm shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>

                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>

                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>

              <div className="space-y-2">
                <p className="text-steel/50">
                  # Install the OmniNile Python SDK
                </p>

                <p className="text-white">
                  <span className="text-emerald">pip</span> install
                  omninile-core
                </p>

                <br />

                <p className="text-steel/50"># Initialize Client</p>

                <p className="text-white">
                  client = <span className="text-yellow-400">OmniClient</span>
                  (api_key=
                  <span className="text-green-400">"omni_live_..."</span>)
                </p>

                <p className="text-white">
                  identity = client.identity.verify(nid=
                  <span className="text-green-400">"123456789"</span>)
                </p>

                <br />

                <p className="text-emerald">
                  {" "}
                  Identity Verified (Latency: 42ms)
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Native SDK Support
                </h3>

                <div className="flex gap-4 text-steel/60 text-sm font-mono">
                  <span className="border-b border-emerald text-white pb-1">
                    Python
                  </span>

                  <span className="hover:text-white transition-colors cursor-pointer">
                    Go
                  </span>

                  <span className="hover:text-white transition-colors cursor-pointer">
                    Node.js
                  </span>

                  <span className="hover:text-white transition-colors cursor-pointer">
                    Java
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">
                  Developer Resources
                </h3>

                <ul className="space-y-3 text-sm text-steel/70">
                  <li className="flex items-center hover:text-emerald cursor-pointer transition-colors">
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    API Documentation
                  </li>

                  <li className="flex items-center hover:text-emerald cursor-pointer transition-colors">
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      ></path>
                    </svg>
                    Sandbox Environment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* RESEARCH & PUBLICATIONS */}
      <motion.section {...fadeInUp} className="py-24 border-t border-steel/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-light text-white">
              Intelligence & Research
            </h2>
            <a
              href="#"
              className="hidden md:block text-emerald text-sm hover:underline"
            >
              View all publications &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "The Sovereign Cloud",
              "Scaling Identity",
              "Algorithmic Trust",
            ].map((title, i) => (
              <article key={title} className="group cursor-pointer">
                <div className="aspect-video bg-slate/50 border border-steel/10 mb-4 overflow-hidden relative group-hover:border-emerald/30 transition-all">
                  <div className="absolute inset-0 bg-emerald/5 group-hover:bg-emerald/10 transition-colors" />
                </div>
                <h3 className="text-white text-lg group-hover:text-emerald transition-colors">
                  {title}
                </h3>
                <p className="text-steel/60 text-sm mt-2 leading-relaxed">
                  Strategic insights into the future of African digital
                  sovereignty and infrastructure.
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

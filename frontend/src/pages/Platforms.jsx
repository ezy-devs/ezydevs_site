import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, Zap } from 'lucide-react'; // Install lucide-react first
import Header from "../components/Header";
import Footer from "../components/Footer";

const Platforms = () => {
  return (
    <div className="bg-void text-steel min-h-screen">
      <Header />
      
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">The Sovereign Stack</h1>
        <p className="max-w-2xl mx-auto text-steel/60 text-lg">
          A modular ecosystem designed to handle identity, logic, and value 
          at the scale of a continent.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LUMIID CARD */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-slate/5 border border-steel/10 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield size={120} className="text-emerald" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">LumiID</h2>
            <p className="text-emerald font-mono text-sm mb-6 underline">Sovereign Identity Layer</p>
            <ul className="space-y-4 text-steel/70 mb-10">
              <li className="flex items-center gap-3"><Zap size={16} className="text-emerald"/> Biometric-to-Hash Encryption</li>
              <li className="flex items-center gap-3"><Zap size={16} className="text-emerald"/> Real-time KYC/AML Verification</li>
              <li className="flex items-center gap-3"><Zap size={16} className="text-emerald"/> Decentralized Data Residency</li>
            </ul>
            <button className="w-full py-4 border border-emerald text-emerald font-bold hover:bg-emerald hover:text-void transition-all">
              EXPLORE LUMIID
            </button>
          </motion.div>

          {/* TERSAI CARD */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-slate/5 border border-steel/10 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} className="text-emerald" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Tersai OS</h2>
            <p className="text-emerald font-mono text-sm mb-6 underline">The Business Kernel</p>
            <ul className="space-y-4 text-steel/70 mb-10">
              <li className="flex items-center gap-3"><Zap size={16} className="text-emerald"/> High-Throughput Logic Engine</li>
              <li className="flex items-center gap-3"><Zap size={16} className="text-emerald"/> Automated Compliance Workflows</li>
              <li className="flex items-center gap-3"><Zap size={16} className="text-emerald"/> Multi-ledger Interoperability</li>
            </ul>
            <button className="w-full py-4 bg-emerald text-void font-bold hover:bg-white transition-all">
              DEPLOY TERSAI
            </button>
          </motion.div>

        </div>
      </section>

      {/* DEPLOYMENT METRICS (Interactive Feeling) */}
      <section className="py-20 bg-emerald/5 border-y border-emerald/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Request Latency", value: "24ms" },
            { label: "Uptime (SLA)", value: "99.99%" },
            { label: "Regional Nodes", value: "12" },
            { label: "Security Level", value: "Tier 4" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xs font-mono text-emerald uppercase mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platforms;
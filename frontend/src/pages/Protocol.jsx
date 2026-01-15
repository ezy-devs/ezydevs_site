import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Protocol = () => {
  return (
    <div className="bg-void text-steel font-sans selection:bg-emerald/30">
      <Header />
      
      {/* 1. HERO / INTRODUCTION */}
      <section className="pt-32 pb-20 px-6 border-b border-steel/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-emerald font-mono text-xs tracking-widest uppercase">Technical Specification v1.0</span>
          <h1 className="text-4xl md:text-6xl text-white font-light mt-6 leading-tight">
            The Nile Protocol: <br />
            <span className="font-bold">Operational Sovereignty.</span>
          </h1>
          <p className="mt-8 text-xl text-steel/70 leading-relaxed font-light">
            The Nile Protocol is the standardized communication layer that bridges 
            Sovereign Identity (LumiID) with Business Logic (Tersai). It defines how 
            data is encrypted, verified, and orchestrated across the continental grid.
          </p>
        </div>
      </section>

      {/* 2. THE THREE-TIER STACK */}
      <section className="py-24 px-6 bg-slate/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* L1: Identity */}
            <div className="border border-steel/10 p-8 bg-void hover:border-emerald/30 transition-all">
              <div className="w-10 h-10 bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald font-mono mb-6">L1</div>
              <h3 className="text-xl text-white font-semibold mb-4">Identity (LumiID)</h3>
              <p className="text-sm text-steel/60 leading-relaxed">
                The foundation. Handles biometric hash matching, KYC verification, and digital footprinting. 
                Built on Zero-Knowledge Proofs to ensure privacy.
              </p>
            </div>

            {/* L2: Business Logic */}
            <div className="border border-steel/10 p-8 bg-void hover:border-emerald/30 transition-all">
              <div className="w-10 h-10 bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald font-mono mb-6">L2</div>
              <h3 className="text-xl text-white font-semibold mb-4">Logic (Tersai OS)</h3>
              <p className="text-sm text-steel/60 leading-relaxed">
                The execution layer. Manages multi-entity workflows, transaction rules, and resource allocation. 
                Acts as the OS for enterprise operations.
              </p>
            </div>

            {/* L3: Intelligence */}
            <div className="border border-steel/10 p-8 bg-void hover:border-emerald/30 transition-all">
              <div className="w-10 h-10 bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald font-mono mb-6">L3</div>
              <h3 className="text-xl text-white font-semibold mb-4">Intelligence</h3>
              <p className="text-sm text-steel/60 leading-relaxed">
                The predictive layer. Analyzes cross-layer data to identify fraud patterns, economic trends, 
                and operational bottlenecks in real-time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. API WORKFLOW (THE HANDSHAKE) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl text-white font-light mb-8">The Secure Handshake</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-emerald font-mono pt-1">01.</span>
                <div>
                  <h4 className="text-white font-semibold">Entity Request</h4>
                  <p className="text-sm text-steel/60 mt-2">Tersai requests identity verification from LumiID using a scoped bearer token.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-emerald font-mono pt-1">02.</span>
                <div>
                  <h4 className="text-white font-semibold">ZK-Verification</h4>
                  <p className="text-sm text-steel/60 mt-2">LumiID verifies the user against regional registries without exposing raw sensitive data.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-emerald font-mono pt-1">03.</span>
                <div>
                  <h4 className="text-white font-semibold">Kernel Execution</h4>
                  <p className="text-sm text-steel/60 mt-2">Once verified, the Tersai OS kernel executes the business logic (e.g., loan disbursement or trade permit).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#050505] border border-steel/10 rounded-lg p-6 font-mono text-xs">
            <div className="flex items-center gap-2 mb-6 border-b border-steel/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <span className="ml-4 text-steel/40 italic">// Sequence Diagram: auth.proto</span>
            </div>
            <pre className="text-emerald space-y-2">
{`
[Client] -> Initiate(User_Hash)
  [Tersai] -> Check_Permissions(User_Hash)
    [LumiID] -> Verify_Sovereign_ID(KYC_Level_3)
    [LumiID] <- Status(Verified: True)
  [Tersai] <- Execute_Workflow(Settlement_Protocol)
[Client] <- 200 OK (Request_ID: ON-982-A)
`}
            </pre>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Protocol;
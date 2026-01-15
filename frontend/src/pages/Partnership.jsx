import React, { useState, useRef } from 'react'; // Added useRef for scrolling
import { motion } from 'framer-motion';
import { Handshake, Globe, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from '../api/client';

const tiers = [
  { id: 'ecosystem', title: "Ecosystem Partner", target: "Startups & Local Devs", description: "Build your applications on the Nile Protocol rails.", features: ["API Sandbox Access", "Documentation", "Community Support"] },
  { id: 'infrastructure', title: "Infrastructure Partner", target: "ISPs & Data Centers", description: "Help us expand the physical presence of the Nile Protocol.", features: ["Node Hosting Rights", "Revenue Sharing", "Technical Support"] },
  { id: 'strategic', title: "Strategic Partner", target: "Government & Financial Inst.", description: "Deep-level integration for national-scale projects.", features: ["Custom Protocol", "Dedicated Team", "Governance Rights"] }
];

export default function Partnership() {
  const [selectedTier, setSelectedTier] = useState('ecosystem');
  const formRef = useRef(null); // To scroll the user to the form

  const handleApplyClick = (tierId) => {
    setSelectedTier(tierId);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-void text-steel min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-emerald font-mono text-xs uppercase tracking-[0.3em]">Scalable Synergy</span>
          <h1 className="text-4xl md:text-6xl font-light text-white mt-6 mb-8 uppercase tracking-tight">
            Build the <span className="font-bold text-emerald">Future</span> <br /> of African Rails.
          </h1>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate/5 border-y border-steel/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <ShieldCheck className="text-emerald w-10 h-10" />
            <h3 className="text-xl text-white font-bold">Sovereign Trust</h3>
            <p className="text-sm text-steel/60">Leverage decentralized identity protocols to build high-trust environments.</p>
          </div>
          <div className="space-y-4">
            <Globe className="text-emerald w-10 h-10" />
            <h3 className="text-xl text-white font-bold">Local Compliance</h3>
            <p className="text-sm text-steel/60">Infrastructure built to navigate African regulatory landscapes.</p>
          </div>
          <div className="space-y-4">
            <Zap className="text-emerald w-10 h-10" />
            <h3 className="text-xl text-white font-bold">Rapid Scaling</h3>
            <p className="text-sm text-steel/60">Deploy solutions across borders using regional distribution nodes.</p>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-8 border border-steel/10 bg-void hover:border-emerald/50 transition-all flex flex-col">
              <h4 className="text-emerald font-mono text-xs uppercase tracking-widest mb-2">{tier.target}</h4>
              <h3 className="text-2xl text-white font-bold mb-4">{tier.title}</h3>
              <p className="text-steel/70 text-sm mb-8 flex-grow">{tier.description}</p>
              <ul className="space-y-3 mb-10">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-xs flex items-center gap-2">
                    <div className="w-1 h-1 bg-emerald rounded-full" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleApplyClick(tier.id)}
                className="w-full py-4 border border-emerald/30 text-emerald text-xs font-bold uppercase tracking-widest hover:bg-emerald hover:text-void transition-all flex items-center justify-center gap-2 group"
              >
                Apply for Partnership <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-20 px-6 max-w-3xl mx-auto">
        <PartnershipForm selectedTier={selectedTier} />
      </section>

      <Footer />
    </div>
  );
}

// Internal Component for the Form
function PartnershipForm({ selectedTier }) {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    tier: selectedTier || 'ecosystem',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  // Important: Update the form's tier if the user clicks a different card
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, tier: selectedTier }));
  }, [selectedTier]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await api.post('contacts/apply-partnership/', formData);
      if (response.status === 201) {
        setStatus('success');
        setFormData({ company_name: '', contact_person: '', email: '', tier: 'ecosystem', message: '' });
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate/10 p-8 border border-steel/10 rounded-lg">
      <div className="mb-6">
        <h3 className="text-2xl text-white font-bold">Partner Registration</h3>
        <p className="text-steel/50 text-xs font-mono uppercase">Submitting to Nile Protocol Registry</p>
      </div>
      
      <input name="company_name" placeholder="Organization Name" value={formData.company_name} onChange={handleChange} className="w-full bg-void border border-steel/20 p-4 text-white focus:border-emerald outline-none transition-colors" required />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="contact_person" placeholder="Lead Contact Name" value={formData.contact_person} onChange={handleChange} className="bg-void border border-steel/20 p-4 text-white focus:border-emerald outline-none" required />
        <input name="email" type="email" placeholder="Business Email" value={formData.email} onChange={handleChange} className="bg-void border border-steel/20 p-4 text-white focus:border-emerald outline-none" required />
      </div>
      <select name="tier" value={formData.tier} onChange={handleChange} className="w-full bg-void border border-steel/20 p-4 text-white focus:border-emerald outline-none appearance-none">
        <option value="ecosystem">Ecosystem Partner</option>
        <option value="infrastructure">Infrastructure Partner</option>
        <option value="strategic">Strategic Partner</option>
      </select>
      <textarea name="message" placeholder="Describe your interest or existing infrastructure..." value={formData.message} onChange={handleChange} rows="4" className="w-full bg-void border border-steel/20 p-4 text-white focus:border-emerald outline-none"></textarea>
      <button type="submit" disabled={status === 'loading'} className="w-full py-5 bg-emerald text-void font-bold uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50">
        {status === 'loading' ? 'Transmitting...' : 'Initiate Handshake'}
      </button>

      {status === 'success' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald text-center font-mono text-sm uppercase">✓ Transmission Successful. David will contact you.</motion.p>}
      {status === 'error' && <p className="text-red-500 text-center text-xs">Transmission Error. Check Protocol Connection.</p>}
    </form>
  );
}
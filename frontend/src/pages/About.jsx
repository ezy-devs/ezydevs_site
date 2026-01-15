import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Team Data - Using paths relative to the 'public' folder
const team = [
  {
    name: "Emmanuel Nzorov",
    role: "CEO / CTO",
    specialty: "Backend Systems & Strategy",
    bio: "Architect of the OmniNile Protocol. Focused on API integration, mentoring, and sovereign revenue models.",
    image: "/images/team/emmanuel.png" 
  },
  {
    name: "David",
    role: "Sales / Marketing Strategist",
    specialty: "B2B Growth & Pipelines",
    bio: "Leading lead generation and B2B pipeline development for continental infrastructure scale.",
    image: "/images/team/david.jpg" 
  },
  {
    name: "Favor",
    role: "Marketing / Social Media",
    specialty: "Awareness & Content",
    bio: "Driving ecosystem engagement and building the OmniNile brand narrative across digital platforms.",
    image: "/images/team/favor.jpg" 
  },
  {
    name: "Tessy",
    role: "B2C Onboarding Specialist",
    specialty: "User Experience & Feedback",
    bio: "Bridging the gap between complex infrastructure and seamless end-user onboarding.",
    image: "/images/team/tessy.jpg" 
  },
  {
    name: "Ignatius",
    role: "Operations",
    specialty: "SOPs & Payment Processing",
    bio: "Ensuring radical reliability in client onboarding and operational payment flows.",
    image: "/images/team/ignatius.jpg" 
  },
  {
    name: "Victoria",
    role: "Frontend Developer",
    specialty: "UX & Interfaces",
    bio: "Engineering the dashboard and onboarding interfaces that make the infrastructure accessible.",
    image: "/images/team/victoria.jpg" 
  }
];

const TeamCard = ({ member, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group border border-steel/10 p-8 hover:border-emerald/40 transition-all bg-void flex flex-col items-center text-center"
    >
      {/* Profile Image Logic */}
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 border-2 border-emerald/20 group-hover:border-emerald/50 transition-colors duration-500 rounded-none transform rotate-45 group-hover:rotate-0"></div>
        <img 
          src={member.image} 
          alt={member.name} 
          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=10b981&color=fff` }}
          className="w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 relative z-10" 
        />
      </div>
      
      <div className="mb-6 z-10">
        <h3 className="text-xl text-white font-bold group-hover:text-emerald transition-colors uppercase tracking-tight">
            {member.name}
        </h3>
        <p className="text-emerald font-mono text-[10px] uppercase tracking-widest mt-1">
            {member.role}
        </p>
      </div>

      <div className="space-y-4 flex-grow flex flex-col justify-between w-full z-10">
        <div className="text-[10px] font-bold text-steel/40 border-b border-steel/5 pb-2 uppercase tracking-tighter">
          Field: {member.specialty}
        </div>
        <p className="text-sm text-steel/60 leading-relaxed italic">
          "{member.bio}"
        </p>
      </div>
    </motion.div>
  );
};

export default function About() {
  return (
    <div className="bg-void text-steel min-h-screen">
      <Header />

      {/* Hero / Mission Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-emerald font-mono text-xs uppercase tracking-[0.3em]">Our Origin</span>
          <h1 className="text-5xl md:text-7xl font-light text-white mt-6 mb-8 uppercase tracking-tighter">
            Built for Africa, <br /> <span className="font-bold text-emerald">By Africans.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-steel/70 leading-relaxed">
            OmniNile emerged from <strong>EzyDevs</strong> with a singular realization: 
            The continent's digital growth is limited by foreign rails. We are building 
            the sovereign infrastructure required for <strong>Identity, Business, and Intelligence</strong> 
            to thrive without borders.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-slate/5 border-y border-steel/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl text-white font-bold uppercase tracking-tight">Engineers of Trust</h2>
            <p className="text-emerald/60 mt-2 font-mono text-sm uppercase tracking-widest">Protocol Core Team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl text-white font-light mb-8 uppercase leading-none">
            Sovereign <br /><span className="font-bold text-emerald">Governance</span>
          </h2>
          <p className="text-steel/70 leading-relaxed text-lg">
            Our leadership model is rooted in <strong>mentorship and local empowerment</strong>. 
            By centering our operations in Gboko, Benue State, we prove that world-class infrastructure 
            doesn't require a Silicon Valley address—it requires technical discipline and 
            continental vision.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { id: "01", title: "Integrity First" },
            { id: "02", title: "Radical Uptime" },
            { id: "03", title: "Local Residency" },
            { id: "04", title: "Open Access" }
          ].map((val) => (
            <div key={val.id} className="p-8 border border-steel/10 bg-void hover:border-emerald/30 transition-colors group">
              <span className="text-emerald font-mono text-3xl font-bold block mb-2">{val.id}</span>
              <p className="text-white text-xs font-mono uppercase tracking-widest">{val.title}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
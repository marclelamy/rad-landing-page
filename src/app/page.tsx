"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Cpu, Zap, Shield, Lock, Server, BarChart3, Activity, Wind } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "", duration = 0.8 }: { children: React.ReactNode, delay?: number, className?: string, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
); 

const BackgroundGlow = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030712]">
    <motion.div 
      className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-primary/10 blur-[120px]"
      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[120px]"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [isAccessDialogOpen, setIsAccessDialogOpen] = useState(false);
  const [accessForm, setAccessForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

  const closeAccessDialog = () => {
    setIsAccessDialogOpen(false);
    setIsRequestSubmitted(false);
    setAccessForm({ name: '', email: '', message: '' });
  };

  const handleAccessRequestSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsRequestSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary/30" ref={containerRef}>
      <BackgroundGlow />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <Server className="w-4 h-4 text-brand-primary" />
            </div>
            <span className="font-serif font-medium text-xl tracking-tight">Compute Carbon</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden z-10">
        <motion.div style={{ y }} className="max-w-7xl mx-auto w-full relative z-20">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-medium tracking-wider uppercase mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                The New Standard for EU CSRD Compliance
              </div>
            </FadeIn>
            <FadeIn delay={0.2} duration={1}>
              <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight mb-8 text-gradient">
                Carbon Intel for<br/>
                <span className="italic text-white">AI Compute.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-white/40 mb-12 max-w-2xl font-light leading-relaxed">
                The first carbon accounting engine engineered exclusively for data centers. Granular tracking from <span className="text-white">refrigerant leaks</span> to <span className="text-white">GPU fabrication hotspots</span>.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  type="button"
                  onClick={() => setIsAccessDialogOpen(true)}
                  className="group relative px-8 py-4 bg-white text-black rounded-full text-base font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Platform Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </FadeIn>
          </div>
        </motion.div>
        
        {/* Abstract 3D-like visual element */}
        <motion.div 
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none hidden lg:block opacity-60 z-10"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute inset-20 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-40 border border-brand-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_70%)]" />
        </motion.div>
      </section>

      {/* Statistics / The Crisis */}
      <section className="py-32 px-6 relative z-10 bg-[#060a14]/80 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {[
              { stat: "50GW+", label: "AI power demand by 2030", desc: "Hyperscalers are straining global grids and accelerating carbon taxes." },
              { stat: "35%", label: "Facility energy wasted", desc: "Inefficient CRACs and liquid loops driving up PUE exponentially." },
              { stat: "$97B", label: "Compliance market by 2031", desc: "Driven directly by CSRD audits and strict EU regulations." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col border-l border-white/10 pl-8">
                  <div className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tighter">{item.stat}</div>
                  <h3 className="text-lg font-medium text-brand-primary mb-3">{item.label}</h3>
                  <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Bento Grid: Anatomy of Emissions */}
      <section className="py-40 px-6 relative z-10" id="platform">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-8 text-gradient max-w-3xl">The anatomy of AI emissions.</h2>
            <p className="text-xl text-white/40 max-w-2xl mb-24 font-light leading-relaxed">
              Generalist platforms use rough spend-based estimates. Compute Carbon maps your physical infrastructure across all three scopes with deep engineering precision.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[340px]">
            
            {/* Scope 3 - Large Card */}
            <FadeIn delay={0.1} className="md:col-span-2 lg:col-span-2 row-span-2 glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group flex flex-col justify-between transition-colors duration-500 hover:bg-white/[0.03]">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-3 group-hover:translate-x-4">
                <Cpu className="w-80 h-80 text-brand-primary" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 text-white/80 text-xs font-medium tracking-wide mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Scope 3 (Value Chain)
                </div>
                <h3 className="text-4xl font-serif mb-6 leading-tight">The Hardware<br/>Lifecycle</h3>
                <p className="text-white/50 text-lg max-w-md leading-relaxed font-light">
                  Pre-built LCAs for GPUs, TPUs, RAM, and SSDs. We track emissions from 500°C silicon wafer fabrication to final assembly, avoiding generic spend-based errors.
                </p>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
                <div className="bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-red-400 text-xs tracking-wider uppercase font-semibold">High Hotspot</div>
                    <Activity className="w-4 h-4 text-red-400" />
                  </div>
                  <div className="text-white font-medium text-sm">NVIDIA H100 Wafer Fab</div>
                </div>
                <div className="bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-yellow-400 text-xs tracking-wider uppercase font-semibold">Med Hotspot</div>
                    <Activity className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-white font-medium text-sm">Motherboard Curing</div>
                </div>
              </div>
            </FadeIn>

            {/* Scope 1 */}
            <FadeIn delay={0.2} className="md:col-span-1 lg:col-span-2 row-span-1 glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group transition-colors duration-500 hover:bg-white/[0.03]">
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                <Wind className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 text-white/80 text-xs font-medium tracking-wide mb-6 w-max">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" /> Scope 1 (Direct)
                </div>
                <h3 className="text-3xl font-serif mb-4">Combustion & Leaks</h3>
                <p className="text-white/50 leading-relaxed font-light max-w-sm">
                  Precise modeling of backup diesel generator runtime during outages, and fugitive emissions from R-134a refrigerants in cooling loops.
                </p>
              </div>
            </FadeIn>

            {/* Scope 2 */}
            <FadeIn delay={0.3} className="md:col-span-1 lg:col-span-1 row-span-1 glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group transition-colors duration-500 hover:bg-brand-primary/[0.02]">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-700">
                <Zap className="w-32 h-32 text-brand-primary" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-xs font-medium tracking-wide mb-6 w-max">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Scope 2 (Indirect)
                  </div>
                  <h3 className="text-2xl font-serif mb-3">Purchased Electricity</h3>
                  <p className="text-white/50 leading-relaxed font-light text-sm">
                    Location and market-based grid carbon intensity. Identifies PUE (&gt;1.5) amplification.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* AI Reporting */}
            <FadeIn delay={0.4} className="md:col-span-1 lg:col-span-1 row-span-1 glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group transition-colors duration-500 hover:bg-white/[0.03] flex items-center justify-center text-center">
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">Audit-Ready</h3>
                <p className="text-white/40 text-sm font-light">Export GHG Protocol compliant reports with full data lineage.</p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Feature Section: Engineered for Hyperscalers */}
      <section className="py-40 px-6 relative z-10 border-y border-white/5 bg-[#030712]" id="features">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.03)_0%,transparent_100%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-40">
            <FadeIn>
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-8">Engineered for Hyperscalers.</h2>
              <p className="text-xl text-white/40 font-light leading-relaxed">Generic ESG platforms aren&apos;t built for AI infrastructure. Compute Carbon understands the compute layer intimately.</p>
            </FadeIn>
          </div>

          <div className="space-y-40">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <FadeIn className="order-2 md:order-1 relative">
                <div className="aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden glass-panel flex items-center justify-center p-12 group">
                  <div className="w-full h-full relative border border-white/5 rounded-[2rem] bg-black/50 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] group-hover:scale-105 transition-transform duration-1000" />
                    <Activity className="w-32 h-32 text-brand-primary relative z-10 animate-pulse" />
                  </div>
                </div>
              </FadeIn>
              <FadeIn className="order-1 md:order-2">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 border border-brand-primary/20">
                  <Cpu className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-4xl font-serif mb-6">FLOPs-Based Precision</h3>
                <p className="text-lg text-white/40 leading-relaxed mb-10 font-light">
                  The AI boom demands new metrics. We track dynamic PUE forecasting for GPU clusters and real-time emissions separated by inference vs. training workloads.
                </p>
                <ul className="space-y-6">
                  {[
                    { title: 'Compute-Layer Granularity', desc: 'Direct mapping of GPU utilization to real-time grid intensity.' },
                    { title: 'Dynamic PUE Forecasting', desc: 'Predictive models for cooling demands during training spikes.' },
                    { title: 'Inference vs. Training', desc: 'Isolate workloads to properly allocate carbon costs to clients.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                      <div>
                        <div className="text-white font-medium mb-1">{item.title}</div>
                        <div className="text-white/40 text-sm font-light">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <FadeIn className="order-1">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-serif mb-6">EU & Paris Native</h3>
                <p className="text-lg text-white/40 leading-relaxed mb-10 font-light">
                  Built from the ground up for EU CSRD automation. We are Paris-based, aligning perfectly with strict European data residency and compliance laws.
                </p>
                <ul className="space-y-6">
                  {[
                    { title: 'Native CSRD Automation', desc: 'Maps telemetry directly to EFRAG reporting standards.' },
                    { title: 'Zero-Retention Privacy', desc: 'Your proprietary facility data never trains public models.' },
                    { title: 'EU Data Residency', desc: '100% hosted within EU borders, fully GDPR compliant.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      <div>
                        <div className="text-white font-medium mb-1">{item.title}</div>
                        <div className="text-white/40 text-sm font-light">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn className="order-2 relative">
                <div className="aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden glass-panel flex items-center justify-center p-12 group">
                  <div className="w-full h-full relative border border-white/5 rounded-[2rem] bg-black/50 overflow-hidden flex flex-col items-center justify-center gap-8 group-hover:scale-105 transition-transform duration-1000">
                     <Lock className="w-24 h-24 text-white/80" />
                     <div className="text-center">
                       <div className="font-serif text-3xl text-white mb-2 tracking-wide">SOC2 Type II</div>
                       <div className="text-white/40 text-sm tracking-widest uppercase">EU Data Residency</div>
                     </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Moat */}
      <section className="py-24 px-6 relative z-10 border-b border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <FadeIn className="flex-1">
            <h2 className="font-serif text-3xl mb-4 text-white">A Moat of Supplier Data.</h2>
            <p className="text-white/40 max-w-lg leading-relaxed font-light">
              We partner directly with hardware manufacturers to source primary Product Carbon Footprints (PCFs), completely eliminating reliance on inaccurate industry averages.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-wrap gap-12 opacity-30 grayscale">
            {/* Generic representations of partners */}
            <div className="font-serif text-3xl font-bold tracking-[0.2em]">SUPERMICRO</div>
            <div className="font-serif text-3xl font-bold tracking-[0.2em]">NVIDIA</div>
            <div className="font-serif text-3xl font-bold tracking-[0.2em]">DELL</div>
          </FadeIn>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-16 px-6 border-t border-white/5 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex items-center gap-3 text-white mb-6">
            <Server className="w-5 h-5 text-brand-primary" />
            <span className="font-serif font-medium text-xl tracking-tight">Compute Carbon</span>
          </div>
          <p className="max-w-xs text-white/30 text-sm leading-relaxed font-light">
            The AI-native carbon accounting engine for data centers. Built in Paris. Engineered for the global grid.
          </p>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-xs text-white/20 font-light">
          <p>© 2026 Compute Carbon. All rights reserved.</p>
        </div>
      </footer>

      {isAccessDialogOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeAccessDialog}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="request-platform-access-title"
            className="relative z-10 w-full max-w-xl rounded-[2rem] glass-panel border border-white/10 bg-[#060d18] p-8 md:p-10"
          >
            <h3 id="request-platform-access-title" className="font-serif text-3xl md:text-4xl mb-3 text-white">
              Request Platform Access
            </h3>
            <p className="text-white/45 mb-8 font-light">
              Share your details and our team will follow up shortly.
            </p>

            {isRequestSubmitted ? (
              <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/10 px-6 py-8 text-center">
                <p className="text-white text-lg">Thanks. Your request has been captured.</p>
                <button
                  type="button"
                  onClick={closeAccessDialog}
                  className="mt-6 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleAccessRequestSubmit} className="space-y-5">
                <div>
                  <label htmlFor="access-name" className="block text-sm text-white/70 mb-2">Name</label>
                  <input
                    id="access-name"
                    type="text"
                    required
                    value={accessForm.name}
                    onChange={(event) =>
                      setAccessForm((current) => ({ ...current, name: event.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-primary/60 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="access-email" className="block text-sm text-white/70 mb-2">Email</label>
                  <input
                    id="access-email"
                    type="email"
                    required
                    value={accessForm.email}
                    onChange={(event) =>
                      setAccessForm((current) => ({ ...current, email: event.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-primary/60 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="access-message" className="block text-sm text-white/70 mb-2">Message</label>
                  <textarea
                    id="access-message"
                    required
                    rows={4}
                    value={accessForm.message}
                    onChange={(event) =>
                      setAccessForm((current) => ({ ...current, message: event.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-primary/60 focus:outline-none resize-none"
                    placeholder="Tell us about your data center needs."
                  />
                </div>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeAccessDialog}
                    className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

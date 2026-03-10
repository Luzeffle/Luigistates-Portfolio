import React from 'react';

export default function FireflyLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-4 md:p-8 flex justify-center items-center relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Background "Firefly" Glowing Orbs (CSS Animations) */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-teal-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px]"></div>

      <div className="max-w-2xl w-full space-y-8 relative z-10">
        
        {/* Header Section: The Glamoth Aesthetic */}
        <header className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="relative">
            {/* Avatar Placeholder with glowing ring */}
            <div className="w-24 h-24 rounded-full border border-emerald-500/30 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
               <span className="text-emerald-400 font-serif italic text-2xl">F</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-950 border border-emerald-500 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full tracking-widest uppercase">
              Type-V
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-light tracking-wide text-white">
              Firefly <span className="font-semibold text-emerald-400">Strategic</span>
            </h1>
            <p className="text-sm mt-2 text-slate-400 italic font-serif">
              "Like fireflies to a flame... life begets death."
            </p>
          </div>
        </header>

        {/* Databank / Project Links (Glassmorphism UI) */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold">
              Stellaron Hunter Databank
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            
            {/* Entry 1: Endfield Chatbot */}
            <a href="#" className="group block relative rounded-xl p-[1px] bg-gradient-to-b from-emerald-500/30 to-slate-800/30 hover:from-emerald-400/60 hover:to-teal-500/30 transition-all duration-500">
              <div className="bg-slate-950/80 backdrop-blur-md rounded-xl p-5 h-full border border-white/5 group-hover:bg-slate-900/80 transition-all">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium text-slate-100 group-hover:text-emerald-300 transition-colors">Arknights: Endfield Terminal</h3>
                  <span className="text-emerald-500 text-xs tracking-widest border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">STREAMLIT</span>
                </div>
                <p className="text-sm text-slate-400">RAG pipeline using LangChain, ChromaDB, and Generative AI to parse game lore and mechanics.</p>
              </div>
            </a>

            {/* Entry 2: EfficientNetB2 Model */}
            <a href="#" className="group block relative rounded-xl p-[1px] bg-gradient-to-b from-emerald-500/30 to-slate-800/30 hover:from-emerald-400/60 hover:to-teal-500/30 transition-all duration-500">
              <div className="bg-slate-950/80 backdrop-blur-md rounded-xl p-5 h-full border border-white/5 group-hover:bg-slate-900/80 transition-all">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium text-slate-100 group-hover:text-emerald-300 transition-colors">Vision Model: EfficientNetB2</h3>
                  <span className="text-teal-500 text-xs tracking-widest border border-teal-500/30 px-2 py-0.5 rounded-full bg-teal-500/10">DEEP LEARNING</span>
                </div>
                <p className="text-sm text-slate-400">Image classification architecture engineered to identify international street food items via confusion matrix analysis.</p>
              </div>
            </a>

            {/* Entry 3: Hardware / Physics */}
            <a href="#" className="group block relative rounded-xl p-[1px] bg-gradient-to-b from-emerald-500/30 to-slate-800/30 hover:from-emerald-400/60 hover:to-teal-500/30 transition-all duration-500">
              <div className="bg-slate-950/80 backdrop-blur-md rounded-xl p-5 h-full border border-white/5 group-hover:bg-slate-900/80 transition-all">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium text-slate-100 group-hover:text-emerald-300 transition-colors">Magnetic Security System</h3>
                  <span className="text-emerald-500 text-xs tracking-widest border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">HARDWARE</span>
                </div>
                <p className="text-sm text-slate-400">Physical circuitry project applying Ohm's Law and KVL utilizing reed switches for perimeter alerts.</p>
              </div>
            </a>

            {/* Entry 4: Visual/Design */}
            <a href="#" className="group block relative rounded-xl p-[1px] bg-gradient-to-b from-emerald-500/30 to-slate-800/30 hover:from-emerald-400/60 hover:to-teal-500/30 transition-all duration-500">
              <div className="bg-slate-950/80 backdrop-blur-md rounded-xl p-5 h-full border border-white/5 group-hover:bg-slate-900/80 transition-all">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium text-slate-100 group-hover:text-emerald-300 transition-colors">Visual Edits: The Call</h3>
                  <span className="text-teal-500 text-xs tracking-widest border border-teal-500/30 px-2 py-0.5 rounded-full bg-teal-500/10">DESIGN</span>
                </div>
                <p className="text-sm text-slate-400">Multi-panel thematic poster edits integrating character modifications and environmental weathering.</p>
              </div>
            </a>

          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 text-center text-xs text-slate-500/50">
          <p>ENTROPY LOSS SYNDROME // OVERRIDE AUTHORIZED</p>
        </footer>

      </div>
    </div>
  );
}
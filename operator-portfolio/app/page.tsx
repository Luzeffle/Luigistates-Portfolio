import React from 'react';

export default function OperatorDossier() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-mono p-4 md:p-8 flex justify-center items-center selection:bg-amber-500 selection:text-black">
      <div className="max-w-3xl w-full space-y-6">
        
        {/* Header Section */}
        <header className="border-l-4 border-amber-500 pl-6 py-2 mb-8 relative">
          <div className="absolute top-0 right-0 text-xs text-neutral-600">SYS.VER.4.0.2</div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
            Operator <span className="text-amber-500">Dossier</span>
          </h1>
          <p className="text-sm mt-2 text-neutral-400 uppercase tracking-widest">
            ID: 236-172 // Status: Active Deployment
          </p>
          
          <div className="flex gap-4 mt-4 text-xs font-bold">
            <div className="bg-neutral-900 px-3 py-1 border border-neutral-800">
              <span className="text-amber-500">CLOUT:</span> 30,943 VIEWS
            </div>
            <div className="bg-neutral-900 px-3 py-1 border border-neutral-800">
              <span className="text-amber-500">CLEAR RATE:</span> 99.8%
            </div>
          </div>
        </header>

        {/* Quest Log / Links Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-neutral-800 pb-2">
            [ ACTIVE QUEST LOG ]
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Link 1: The Chatbot */}
            <a href="#" className="block group">
              <div className="bg-neutral-900 border border-neutral-800 p-4 transition-all duration-300 group-hover:border-amber-500 group-hover:translate-x-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold bg-amber-500/10 text-amber-500 px-2 py-0.5">QUEST: TERMINAL</span>
                  <span className="text-xs text-neutral-500">[COMPLETE]</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400">Endfield RAG Intel System</h3>
                <p className="text-xs text-neutral-400 mt-2">Access the Streamlit/Langchain database for restricted lore and mechanics.</p>
              </div>
            </a>

            {/* Link 2: The ML Model */}
            <a href="#" className="block group">
              <div className="bg-neutral-900 border border-neutral-800 p-4 transition-all duration-300 group-hover:border-amber-500 group-hover:translate-x-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5">ACHIEVEMENT: ML</span>
                  <span className="text-xs text-neutral-500">[COMPLETE]</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400">Vision Model V-1</h3>
                <p className="text-xs text-neutral-400 mt-2">Deploy the EfficientNetB2 classifier to scan and identify international street food rations.</p>
              </div>
            </a>

            {/* Link 3: Hardware */}
            <a href="#" className="block group">
              <div className="bg-neutral-900 border border-neutral-800 p-4 transition-all duration-300 group-hover:border-blue-500 group-hover:translate-x-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold bg-blue-500/10 text-blue-500 px-2 py-0.5">MISSION: HARDWARE</span>
                  <span className="text-xs text-neutral-500">[IN PROGRESS]</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400">Perimeter Security</h3>
                <p className="text-xs text-neutral-400 mt-2">Review circuit diagrams and KVL calculations for the magnetic door alarm system.</p>
              </div>
            </a>

            {/* Link 4: Community/Social */}
            <a href="#" className="block group">
              <div className="bg-neutral-900 border border-neutral-800 p-4 transition-all duration-300 group-hover:border-purple-500 group-hover:translate-x-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold bg-purple-500/10 text-purple-500 px-2 py-0.5">CO-OP MULTIPLAYER</span>
                  <span className="text-xs text-neutral-500">[{'>'} CONNECT]</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400">Join the Syndicate</h3>
                <p className="text-xs text-neutral-400 mt-2">Establish comms via Discord. Prolly the best server you'll ever be in.</p>
              </div>
            </a>

          </div>
        </div>

        {/* Footer Terminal Output */}
        <footer className="pt-8 text-xs text-neutral-600 flex flex-col gap-1">
          <p>{'>'} SYSTEM BOOT SUCCESSFUL...</p>
          <p>{'>'} ESTABLISHING SECURE CONNECTION TO VERCEL...</p>
          <p className="animate-pulse text-amber-500">{'>'} WAITING FOR USER INPUT_</p>
        </footer>

      </div>
    </div>
  );
}
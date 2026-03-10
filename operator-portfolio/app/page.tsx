"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function FireflyLandingPage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [views, setViews] = useState(30943); // Placeholder for Vercel KV database
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle the "Click to Enter" action
  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }
    // Here is where you would eventually call your Vercel KV API to increment views:
    // fetch('/api/increment-view') ...
  };

  // Handle Volume Slider
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* 1. HIDDEN AUDIO ELEMENT */}
      {/* Replace 'your-song.mp3' with a link to your audio file placed in the 'public' folder */}
      <audio ref={audioRef} src="/your-song.mp3" loop />

      {/* 2. BACKGROUND VIDEO OR GIF */}
      {/* Place 'firefly-bg.mp4' in your Next.js 'public' folder */}
      {hasEntered && (
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        >
          <source src="/firefly-bg1.mp4" type="video/mp4" />
        </video>
      )}

{/* 3. INTRO SCREEN */}
      {!hasEntered ? (
        <div 
          onClick={handleEnter}
          className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer bg-slate-950 hover:bg-slate-900 transition-colors duration-500"
        >
          <div className="text-center animate-pulse">
            <p className="text-emerald-500 text-sm tracking-[0.5em] uppercase mb-2">System Locked</p>
            <h1 className="text-3xl font-light text-white">Click anywhere to <span className="font-semibold text-emerald-400">Initiate</span></h1>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center p-4 md:p-8 animate-in fade-in duration-1000">
          {/* 4. MAIN CONTENT (Only shows after clicking) */}
          
          {/* Floating Top Bar (Volume & Views) */}
          <div className="w-full max-w-2xl flex justify-between items-center mb-8 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-full px-6 py-3">
          
          {/* View Counter UI */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs tracking-widest text-emerald-400">VIEWS: {views.toLocaleString()}</span>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">VOL</span>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>

        <div className="max-w-2xl w-full space-y-8">
          {/* Header Section */}
          <header className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="relative">
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

          {/* Databank / Project Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold">
                Stellaron Hunter Databank
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Entry 1 */}
              <a href="#" className="group block relative rounded-xl p-[1px] bg-gradient-to-b from-emerald-500/30 to-slate-800/30 hover:from-emerald-400/60 transition-all duration-500">
                <div className="bg-slate-950/80 backdrop-blur-md rounded-xl p-5 h-full border border-white/5 group-hover:bg-slate-900/80 transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium text-slate-100 group-hover:text-emerald-300 transition-colors">Arknights: Endfield Terminal</h3>
                    <span className="text-emerald-500 text-xs tracking-widest border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">STREAMLIT</span>
                  </div>
                  <p className="text-sm text-slate-400">RAG pipeline using LangChain, ChromaDB, and Generative AI.</p>
                </div>
              </a>
              {/* Add your other project links here using the same format */}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
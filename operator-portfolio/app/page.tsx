"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function FireflyLandingPage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [views, setViews] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetch('/api/views')
      .then((res) => res.json())
      .then((data) => {
        if (data.views) setViews(data.views);
      });
  }, []);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicking the code from triggering other events
    navigator.clipboard.writeText('LUIGISTATES123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEnter = async () => {
    if (isEntering) return; // Prevents spam-clicking the intro
    
    // 1. Trigger the fade-out animation
    setIsEntering(true);
    
    // 2. Start the music immediately
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }

    // 3. Increment the database
    try {
      const res = await fetch('/api/views', { method: 'POST' });
      const data = await res.json();
      if (data.views) setViews(data.views);
    } catch (error) {
      console.error("Failed to increment views", error);
    }

    // 4. Wait exactly 1 second for the fade effect, then swap the UI
    setTimeout(() => {
      setHasEntered(true);
    }, 1000); 
  };

  // 4. Handle Volume Slider
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      <audio ref={audioRef} src="/your-song.mp3" loop />

      {/* Main Background Video (Shows after entry) */}
      {hasEntered && (
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        >
          <source src="/firefly-bg1.mp4" type="video/mp4" />
        </video>
      )}

      {!hasEntered ? (
        /* INTRO SCREEN */
          <div 
            onClick={handleEnter}
            // The magic happens here: If isEntering is true, it blurs, fades to 0, and zooms in slightly
            className={`absolute inset-0 z-50 flex items-center justify-center cursor-pointer bg-slate-950 transition-all duration-1000 ease-in-out ${
              isEntering ? "opacity-0 scale-105 blur-xl pointer-events-none" : "opacity-100 scale-100 blur-0"
            }`}
          >

          <div className="text-center animate-pulse relative z-10">
            <p className="text-emerald-500 text-sm tracking-[0.2em] uppercase mb-2 max-w-sm mx-auto leading-relaxed text-center whitespace-pre-line opacity-80">
              {`Fyreflies are such magical creatures, aren't they?
              They may throw themselves at a 
              flame or suddenly grow old,
              but every night before that, 
              they will shine brighter than the stars`}
            </p>
          </div>
        </div>
      ) : (
        /* MAIN PORTFOLIO CONTENT */
        <div className="relative z-10 flex flex-col items-center p-4 md:p-8 animate-in fade-in duration-1000">
          
          {/* Top Bar */}
          <div className="w-full max-w-2xl flex justify-between items-center mb-8 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs tracking-widest text-emerald-400">VIEWS: {views.toLocaleString()}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">VOL</span>
              <input 
                type="range" min="0" max="1" step="0.01" 
                value={volume} onChange={handleVolumeChange}
                className="w-24 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          <div className="max-w-2xl w-full space-y-8">
            <header className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border border-emerald-500/30 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] overflow-hidden">
                  <img src="/profile.webp" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-950 border border-emerald-500 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full tracking-widest uppercase">
                  I love FireFly
                </div>
              </div>
              
              <div>
                <h1 
                  data-text="LUIGISTATES"
                  className="text-4xl font-firefly tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-200 to-amber-500 drop-shadow-[0_0_12px_rgba(52,211,118,0.4)] animate-fire"
                >
                  Luigistates
                </h1>
                <p className="text-sm mt-2 text-slate-400 italic font-serif">
                  "Like fireflies to a flame... life begets death."
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <a href="https://x.com/Luigistates" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/50 border border-white/5 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.twitch.tv/luigistates" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/50 border border-white/5 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@luigistates" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/50 border border-white/5 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.63 5.63 0 0 1-1.04-.1z"/></svg>
                </a>
              </div>
            </header>

            <div className="space-y-4">
              <div className="flex flex-col items-center gap-2 w-full">
                {/* The Top Line/Divider logic */}
                <div className="flex items-center w-full gap-3">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
                  
                  <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold flex flex-col md:flex-row items-center gap-1">
                    <span className="whitespace-nowrap">Use SAC Code:</span>
                    <span 
                      onClick={handleCopyCode}
                      className="italic cursor-pointer px-2 py-0.5 rounded bg-emerald-500/10 hover:bg-emerald-500/20 hover:text-emerald-300 transition-all duration-300 border border-emerald-500/20 md:border-none"
                    >
                      {copied ? 'COPIED!' : 'LUIGISTATES123'}
                    </span>
                  </h2>

                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
                </div>

                {/* The Hashtags neatly underneath */}
                <div className="flex gap-4 opacity-40 text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium">
                  <span>#AD</span>
                  <span>#EPICPARTNER</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  
                {/* Discord Button */}
                <a href="https://discord.gg/liniscrazy" target="_blank" className="group relative block rounded-xl p-[1px] bg-slate-800 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-emerald-500 transition-all duration-500">
                  <div className="bg-slate-950/90 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden h-24">
                      {/* Discord Sticker Image */}
                      <img 
                        src="/sticker1.webp" 
                        alt="sticker"
                        className="absolute -right-1 -top-1 w-10 h-10 opacity-20 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 pointer-events-none drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" 
                      />
                    <h3 className="text-sm font-bold tracking-widest text-slate-300 group-hover:text-white uppercase transition-colors">Discord Server -LinIsCrazy-</h3>
                  </div>
                </a>

                {/* Donation Button */}
                <a href="https://streamelements.com/luigistates/tip" target="_blank" className="group relative block rounded-xl p-[1px] bg-slate-800 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-amber-500 transition-all duration-500">
                  <div className="bg-slate-950/90 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden h-24">
                    {/* Donation Sticker Image */}
                    <img 
                      src="/sticker2.webp" 
                      alt="sticker"
                      className="absolute -right-1 -top-1 w-10 h-10 opacity-20 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 pointer-events-none drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                    />
                    <h3 className="text-sm font-bold tracking-widest text-slate-300 group-hover:text-white uppercase transition-colors">Donations</h3>
                  </div>
                </a>

                {/* SAC Button */}
                <a href="https://store.epicgames.com//p/fortnite?lang=en-US&epic_creator_id=f6eb8c6812c34d09890fdfff34fe75e0&epic_game_id=fortnite" target="_blank" className="group relative block rounded-xl p-[1px] bg-slate-800 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-amber-500 transition-all duration-500">
                  <div className="bg-slate-950/90 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden h-24">
                    {/* SAC Sticker Image */}
                    <img 
                      src="/sticker3.webp" 
                      alt="sticker"
                      className="absolute -right-1 -top-1 w-10 h-10 opacity-20 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 pointer-events-none drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
                    />
                    <h3 className="text-sm font-bold tracking-widest text-slate-300 group-hover:text-white uppercase transition-colors">Support a Creator Code</h3>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
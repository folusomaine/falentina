import React, { useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

const Celebration: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 120);

    const duration = 6000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 340,
      ticks: 90,
      zIndex: 180,
      scalar: 0.95
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        window.clearInterval(interval);
        confetti({
          particleCount: 160,
          spread: 120,
          origin: { x: 0.5, y: 0.6 },
          zIndex: 180
        });
        return;
      }

      const particleCount = Math.max(10, Math.floor(40 * (timeLeft / duration)));
      confetti({ ...defaults, particleCount, origin: { x: 0.2, y: 0.75 } });
      confetti({ ...defaults, particleCount, origin: { x: 0.8, y: 0.75 } });
    }, 320);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timer);
    };
  }, []);

  const floatingBadges = useMemo(() => ['💌', '🥂', '🌹', '💖'], []);

  return (
    <section
      className={`relative w-full max-w-4xl rounded-[2rem] border border-white/30 bg-white/15 p-4 shadow-[0_24px_90px_rgba(10,5,15,0.35)] backdrop-blur-2xl transition-all duration-700 sm:p-6 md:p-8 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="overflow-hidden rounded-[1.6rem] border border-white/20 bg-gradient-to-br from-white/22 via-white/12 to-white/5 p-6 sm:p-8 md:p-10">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-rose-50/90">
          <Sparkles className="h-4 w-4" />
          It is a date
        </div>

        <h2 className="mt-6 text-center font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
          Best answer ever.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-rose-100/90 sm:text-base md:text-lg">
          February 14 is officially upgraded. Dress code: smiles, flowers, and dramatic eye contact.
        </p>

        <div className="relative mt-8 flex items-center justify-center py-8 sm:py-10">
          <div className="absolute h-36 w-36 rounded-full bg-rose-300/35 blur-2xl sm:h-44 sm:w-44" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.7rem] border border-white/30 bg-white/25 shadow-[0_14px_32px_rgba(255,77,125,0.3)] sm:h-28 sm:w-28">
            <Heart className="h-12 w-12 text-rose-100 animate-[pulse_1.8s_ease-in-out_infinite]" fill="currentColor" />
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {floatingBadges.map((emoji, index) => (
            <div
              key={emoji}
              className="rounded-2xl border border-white/25 bg-black/10 px-3 py-4 text-center text-3xl backdrop-blur-sm animate-[card-float_5s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default Celebration;


import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const Celebration: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const duration = 7 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 35, spread: 360, ticks: 100, zIndex: 200 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 70 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 300);

    // Audio for clapping / ovation sound
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2026/2026-preview.mp3');
    audio.play().catch(e => console.log("Audio play blocked", e));

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const mixedEmojis = ['💖', '🌻', '💖', '🌻', '💖'];

  return (
    <div className={`fixed inset-0 z-[150] bg-gradient-to-br from-white via-pink-100 to-pink-200 flex flex-col items-center justify-start overflow-y-auto pt-12 md:pt-32 p-6 md:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <h2 className="text-5xl md:text-8xl font-romantic text-red-600 mb-6 drop-shadow-sm animate-bounce text-center">
        Yay! Clock itttttt! 👌
      </h2>
      <p className="text-2xl md:text-5xl font-heartland text-pink-600 mb-8 tracking-widest drop-shadow-sm text-center px-4">
        See you on the 14th, my Valentine!
      </p>

      {/* Elegant Floating Heart Centerpiece - Responsive Height */}
      <div className="relative w-full max-w-4xl h-[200px] md:h-[300px] flex items-center justify-center shrink-0">
        <div className="animate-float">
          <svg
            width="180"
            height="180"
            viewBox="0 0 24 24"
            fill="url(#heartGradient)"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl md:w-[240px] md:h-[240px]"
          >
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4d4d" />
                <stop offset="100%" stopColor="#ff0066" />
              </linearGradient>
            </defs>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      <div className="mt-8 mb-12 flex gap-4 md:gap-12 flex-wrap justify-center shrink-0">
        {mixedEmojis.map((emoji, i) => (
            <span key={i} className="text-4xl md:text-7xl animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>
              {emoji}
            </span>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-15px) scale(1.05) rotate(5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Celebration;

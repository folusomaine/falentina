
import React from 'react';

const CupidAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Cupid SVG - Floating from the left */}
      <div className="absolute left-0 animate-[cupid-fly_4s_ease-in-out_infinite]">
        <svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Simple Cupid representation */}
          <circle cx="100" cy="80" r="30" fill="#FFE0BD" /> {/* Head */}
          <rect x="85" y="110" width="30" height="50" rx="10" fill="#FFFFFF" /> {/* Body */}
          <path d="M70 115C50 100 40 130 70 145" stroke="#FEE2E2" strokeWidth="8" strokeLinecap="round" /> {/* Left Wing */}
          <path d="M130 115C150 100 160 130 130 145" stroke="#FEE2E2" strokeWidth="8" strokeLinecap="round" /> {/* Right Wing */}
          <path d="M110 130L170 130" stroke="#92400E" strokeWidth="4" /> {/* Bow/Arrow */}
          <path d="M170 130L160 125M170 130L160 135" stroke="#92400E" strokeWidth="4" /> {/* Arrowhead */}
          <circle cx="90" cy="75" r="3" fill="black" /> {/* Eye */}
          <circle cx="110" cy="75" r="3" fill="black" /> {/* Eye */}
          <path d="M90 90C95 95 105 95 110 90" stroke="red" strokeWidth="2" /> {/* Smile */}
        </svg>
      </div>

      {/* Heart SVG - Pulse in center */}
      <div className="animate-[heart-arrival_4s_ease-in-out_infinite]">
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      <style>{`
        @keyframes cupid-fly {
          0% { transform: translateX(-50px) translateY(0px) rotate(-5deg); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateX(100px) translateY(-30px) rotate(5deg); }
          80% { opacity: 1; }
          100% { transform: translateX(250px) translateY(0px) rotate(-5deg); opacity: 0; }
        }
        @keyframes heart-arrival {
          0% { transform: scale(0.5); opacity: 0; filter: blur(5px); }
          50% { transform: scale(1.2); opacity: 1; filter: blur(0px); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CupidAnimation;

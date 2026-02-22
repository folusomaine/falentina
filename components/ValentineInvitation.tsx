
import React, { useState, useRef } from 'react';
import { Heart } from 'lucide-react';

interface Props {
  onAccept: () => void;
}

const ValentineInvitation: React.FC<Props> = ({ onAccept }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const btnRect = noButtonRef.current.getBoundingClientRect();

    // Bounds for jumping
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoButtonPos({ 
      x: randomX - (containerRect.width / 2) + (btnRect.width / 2), 
      y: randomY - (containerRect.height / 2) + (btnRect.height / 2) 
    });
    setHasMoved(true);
  };

  const handleYesClick = () => {
    onAccept();
  };

  return (
    <div 
      ref={containerRef}
      className="relative z-10 text-center p-12 bg-white/90 backdrop-blur-md rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-pink-100 max-w-2xl w-full mx-4"
    >
      <div className="mb-8 flex justify-center">
        <Heart className="text-red-500 w-20 h-20 animate-pulse" fill="currentColor" />
      </div>

      <h1 className="text-4xl md:text-5xl font-romantic text-red-600 mb-12 leading-tight">
        Will you be my Valentine?
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 min-h-[200px]">
        {/* Yes Button - Circle */}
        <div className="relative">
          <button
            onClick={handleYesClick}
            className="group w-40 h-40 bg-red-500 hover:bg-red-600 text-white rounded-full text-4xl font-black shadow-[0_10px_30px_rgba(239,68,68,0.4)] transform transition-all hover:scale-110 active:scale-90 z-20 flex items-center justify-center"
          >
            YES!
            <span className="absolute -top-4 -right-4 text-sm bg-yellow-400 text-red-800 px-3 py-1.5 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity font-bold">
              Pick me!
            </span>
          </button>
        </div>

        {/* No Button - Circle shape */}
        <button
          ref={noButtonRef}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton} 
          style={hasMoved ? { 
            position: 'absolute',
            left: `calc(50% + ${noButtonPos.x}px)`,
            top: `calc(50% + ${noButtonPos.y}px)`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          } : {}}
          className="w-24 h-24 bg-green-500 text-white rounded-full text-xl font-bold shadow-lg z-50 flex items-center justify-center"
        >
          No
        </button>
      </div>

      <p className="mt-12 text-pink-600 font-heartland text-xl tracking-widest animate-pulse">
        {hasMoved ? "How dare you try to click No! 😜" : "Choose wisely..."}
      </p>
    </div>
  );
};

export default ValentineInvitation;

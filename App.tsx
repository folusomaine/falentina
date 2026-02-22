
import React, { useState, useEffect, useCallback } from 'react';
import ValentineInvitation from './components/ValentineInvitation';
import Celebration from './components/Celebration';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center overflow-x-hidden">
      {!isAccepted ? (
        <ValentineInvitation onAccept={handleAccept} />
      ) : (
        <Celebration />
      )}
      
      {/* Background Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-20 text-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Footer Credit */}
      <div className="fixed bottom-2 right-2 z-[300] text-[10px] md:text-xs text-pink-400/80 font-sans pointer-events-none select-none">
        made with ❤️ by maine
      </div>
    </div>
  );
};

export default App;

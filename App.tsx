import React, { useMemo, useState } from 'react';
import ValentineInvitation from './components/ValentineInvitation';
import Celebration from './components/Celebration';

type FloatHeart = {
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
};

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const floatingHearts = useMemo<FloatHeart[]>(
    () =>
      Array.from({ length: 14 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 1.3 + 0.7}rem`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 6 + 7}s`
      })),
    []
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#140712] text-rose-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-[-8rem] h-[22rem] w-[22rem] rounded-full bg-rose-500/35 blur-3xl animate-orb-drift" />
        <div className="absolute right-[-7rem] top-[10%] h-[20rem] w-[20rem] rounded-full bg-fuchsia-400/25 blur-3xl animate-orb-drift-delayed" />
        <div className="absolute bottom-[-8rem] left-[18%] h-[18rem] w-[18rem] rounded-full bg-red-400/20 blur-3xl animate-orb-drift-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.11),_transparent_45%),radial-gradient(circle_at_80%_70%,_rgba(255,255,255,0.1),_transparent_35%)]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1]">
        {floatingHearts.map((heart, index) => (
          <span
            key={`heart-${index}`}
            className="absolute text-rose-200/35 animate-float-heart"
            style={{
              left: heart.left,
              top: heart.top,
              fontSize: heart.size,
              animationDelay: heart.delay,
              animationDuration: heart.duration
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
        {!isAccepted ? (
          <ValentineInvitation onAccept={() => setIsAccepted(true)} />
        ) : (
          <Celebration />
        )}
      </main>

      <div className="pointer-events-none fixed bottom-3 right-4 z-[80] text-[10px] tracking-[0.18em] text-rose-200/70 sm:text-xs">
        made with love by maine
      </div>

      <style>{`
        @keyframes orb-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -24px, 0) scale(1.1); }
        }
        @keyframes orb-drift-delayed {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-24px, 20px, 0) scale(0.95); }
        }
        @keyframes orb-drift-slow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(28px, -10px, 0) scale(1.12); }
        }
        @keyframes float-heart {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.12; }
          50% { transform: translate3d(0, -12px, 0) scale(1.12); opacity: 0.34; }
        }
        .animate-orb-drift { animation: orb-drift 12s ease-in-out infinite; }
        .animate-orb-drift-delayed { animation: orb-drift-delayed 16s ease-in-out infinite; }
        .animate-orb-drift-slow { animation: orb-drift-slow 19s ease-in-out infinite; }
        .animate-float-heart { animation: float-heart ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App;

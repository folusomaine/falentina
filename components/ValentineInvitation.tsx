import React, { useRef, useState } from 'react';
import { Heart } from 'lucide-react';

interface Props {
  onAccept: () => void;
}

const ValentineInvitation: React.FC<Props> = ({ onAccept }) => {
  const arenaRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number } | null>(null);
  const [misses, setMisses] = useState(0);

  const moveNoButton = () => {
    if (!arenaRef.current || !noButtonRef.current) return;

    const arenaRect = arenaRef.current.getBoundingClientRect();
    const buttonRect = noButtonRef.current.getBoundingClientRect();

    const padding = 12;
    const maxX = Math.max(padding, arenaRect.width - buttonRect.width - padding);
    const maxY = Math.max(padding, arenaRect.height - buttonRect.height - padding);

    setNoButtonPos({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
    setMisses((value) => value + 1);
  };

  const noButtonLabel = () => {
    if (misses >= 5) return 'still no?';
    if (misses >= 3) return 'nice try';
    if (misses >= 1) return 'too slow';
    return 'no';
  };

  const teaser =
    misses === 0
      ? 'Choose wisely.'
      : misses < 4
        ? 'That button has commitment issues.'
        : 'It only accepts yes energy.';

  return (
    <section className="w-full max-w-3xl rounded-[2rem] border border-white/30 bg-white/16 p-4 shadow-[0_24px_80px_rgba(15,5,20,0.35)] backdrop-blur-2xl sm:p-6 md:p-8">
      <div className="rounded-[1.6rem] border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-6 sm:p-8 md:p-10">
        <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-lg shadow-rose-900/20 sm:mb-8 sm:h-16 sm:w-16">
          <Heart className="h-8 w-8 text-rose-100 animate-[pulse_2.6s_ease-in-out_infinite]" fill="currentColor" />
        </div>

        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-rose-100/80">Valentine Invite</p>
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Will you be my Valentine?
        </h1>
        <p className="mt-4 max-w-xl text-sm text-rose-100/90 sm:text-base">
          One tiny question, one huge yes, and one very dramatic backup plan.
        </p>

        <div
          ref={arenaRef}
          className="relative mt-8 min-h-[230px] rounded-3xl border border-white/20 bg-black/10 p-4 sm:min-h-[260px] sm:p-5"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <button
              onClick={onAccept}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-lg font-semibold tracking-wide text-white shadow-[0_12px_28px_rgba(244,63,94,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(244,63,94,0.6)] active:translate-y-0 sm:w-auto"
            >
              <span className="relative z-10">Yes, absolutely</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-700 group-hover:translate-x-[120%]" />
            </button>

            <button
              ref={noButtonRef}
              onMouseEnter={moveNoButton}
              onPointerDown={moveNoButton}
              onClick={moveNoButton}
              style={
                noButtonPos
                  ? {
                      position: 'absolute',
                      left: `${noButtonPos.x}px`,
                      top: `${noButtonPos.y}px`
                    }
                  : undefined
              }
              className="rounded-2xl border border-white/25 bg-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-rose-50 shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              {noButtonLabel()}
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-rose-100/90 sm:text-base">{teaser}</p>
      </div>
    </section>
  );
};

export default ValentineInvitation;

const WaveRipple = ({ side, index }: { side: 'left' | 'right'; index: number }) => {
  const heights = [40, 56, 48, 64, 52];
  const animationClass = `animate-wave-ripple-${index + 1}`;
  const xOffset = side === 'left' ? -80 - (index * 8) : 80 + (index * 8);

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2"
      style={{ left: `calc(50% + ${xOffset}px)` }}
    >
      <div
        className={`w-2 bg-white/70 rounded-full backdrop-blur-sm ${animationClass}`}
        style={{
          height: `${heights[index]}px`,
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(192, 132, 252, 0.3)',
          transformOrigin: 'center'
        }}
      />
    </div>
  );
};

export default function SimpleAILogo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8">
      <h1
        className="text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent select-none animate-title-glow"
        style={{
          fontFamily: "'Hiragino Sans', 'Noto Sans JP', sans-serif",
          letterSpacing: '0.05em'
        }}
      >
        AI株式分析
      </h1>

      <div className="flex items-center justify-center w-full h-full">
        <div className="relative">
          <div className="absolute inset-0 rounded-full w-32 h-32 blur-3xl opacity-60 animate-pulse"
            style={{background: 'radial-gradient(circle, rgba(192, 132, 252, 0.8) 0%, rgba(147, 51, 234, 0.4) 100%)'}}
          />

          {[0, 1, 2, 3, 4].map((i) => (
            <WaveRipple key={`left-${i}`} side="left" index={i} />
          ))}

          {[0, 1, 2, 3, 4].map((i) => (
            <WaveRipple key={`right-${i}`} side="right" index={i} />
          ))}

          <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm border-4 border-white/30"
            style={{
              background: 'linear-gradient(135deg, rgba(233, 213, 255, 0.9) 0%, rgba(192, 132, 252, 0.9) 50%, rgba(147, 51, 234, 0.9) 100%)',
              boxShadow: '0 8px 32px rgba(147, 51, 234, 0.4), 0 0 60px rgba(192, 132, 252, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-shine" />

            <span className="text-5xl font-bold bg-gradient-to-br from-white to-purple-100 bg-clip-text text-transparent drop-shadow-lg relative z-10 select-none">
              AI
            </span>
          </div>

          <div className="absolute -inset-4 rounded-full border-2 border-white/20 animate-ping-slow" />
          <div className="absolute -inset-8 rounded-full border border-white/10 animate-ping-slower" />
        </div>
      </div>
    </div>
  );
}

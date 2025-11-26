export default function AnimatedAILogo() {
  const stockLogos = [
    { name: 'Toyota', symbol: 'T' },
    { name: 'Sony', symbol: 'S' },
    { name: 'Nintendo', symbol: 'N' },
    { name: 'SoftBank', symbol: 'SB' },
    { name: 'Honda', symbol: 'H' },
    { name: 'Panasonic', symbol: 'P' },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-96 h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative animate-breathe">
            <div className="absolute inset-0 rounded-full bg-yellow-300 w-20 h-20 blur-3xl opacity-90 animate-pulse shadow-[0_0_60px_rgba(252,211,77,0.8)]"></div>

            <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(252,211,77,0.6),0_0_60px_rgba(252,211,77,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent animate-shine"></div>
              <span className="text-3xl font-bold text-gray-900 drop-shadow-lg relative z-10">AI</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <div className="w-44 h-44 rounded-full border border-white/90 shadow-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-medium" style={{ animationDirection: 'reverse' }}>
          <div className="relative w-60 h-60">
            <div className="w-full h-full rounded-full border border-white/70 shadow-lg"></div>
            {stockLogos.map((stock, index) => {
              const angle = (index * 360) / stockLogos.length;
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <div
                  key={stock.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="bg-transparent w-10 h-10 rounded-full border-2 border-white/70 shadow-lg flex items-center justify-center backdrop-blur-sm animate-pulse">
                    <span className="text-white text-xs font-bold drop-shadow-lg">{stock.symbol}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-fast">
          <div className="w-80 h-80 rounded-full border border-white/30 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

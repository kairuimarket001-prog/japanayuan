export default function AnimatedAILogo() {
  const stockLogos = [
    { name: 'Toyota', symbol: 'T', color: 'bg-red-500' },
    { name: 'Sony', symbol: 'S', color: 'bg-blue-600' },
    { name: 'Nintendo', symbol: 'N', color: 'bg-red-600' },
    { name: 'SoftBank', symbol: 'SB', color: 'bg-gray-800' },
    { name: 'Honda', symbol: 'H', color: 'bg-blue-700' },
    { name: 'Panasonic', symbol: 'P', color: 'bg-blue-500' },
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
              const radius = 30;
              return (
                <div
                  key={stock.name}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius * 2.4}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className={`${stock.color} w-10 h-10 rounded-full border-2 border-white/70 shadow-lg flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{stock.symbol}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-fast">
          <div className="w-80 h-80 rounded-full border border-white/50 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

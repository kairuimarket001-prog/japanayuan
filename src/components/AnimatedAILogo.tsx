export default function AnimatedAILogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-80 h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative animate-breathe">
            <div className="absolute inset-0 rounded-full bg-yellow-300 w-20 h-20 blur-3xl opacity-80 animate-pulse"></div>

            <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent animate-shine"></div>
              <span className="text-3xl font-bold text-gray-900 drop-shadow-lg relative z-10">AI</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <div className="w-40 h-40 rounded-full border border-white/90 shadow-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-medium" style={{ animationDirection: 'reverse' }}>
          <div className="w-56 h-56 rounded-full border border-white/70 shadow-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-fast">
          <div className="w-72 h-72 rounded-full border border-white/50 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

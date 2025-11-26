export default function AnimatedAILogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-96 h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-400 w-24 h-24 blur-3xl opacity-70 animate-pulse"></div>

            <div className="relative z-10 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-gray-900">AI</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <div className="w-44 h-44 rounded-full border border-white/90 shadow-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-medium" style={{ animationDirection: 'reverse' }}>
          <div className="w-64 h-64 rounded-full border border-white/70 shadow-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-fast">
          <div className="w-80 h-80 rounded-full border border-white/50 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

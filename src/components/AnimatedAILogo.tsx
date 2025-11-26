export default function AnimatedAILogo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-[32rem] h-[32rem]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative animate-breathe">
            <div className="absolute inset-0 rounded-full bg-yellow-300 w-28 h-28 blur-3xl opacity-80 animate-pulse"></div>

            <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold text-gray-900 drop-shadow-lg">AI</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <div className="w-52 h-52 rounded-full border border-white/90 shadow-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-medium" style={{ animationDirection: 'reverse' }}>
          <div className="w-80 h-80 rounded-full border border-white/70 shadow-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-spin-fast">
          <div className="w-[26rem] h-[26rem] rounded-full border border-white/50 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

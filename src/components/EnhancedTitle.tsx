export default function EnhancedTitle() {
  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <div
        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(128, 128, 128, 0.25)'
        }}
      >
        <div
          className="w-3 h-3 rounded-full animate-pulse"
          style={{
            backgroundColor: '#4ade80',
            boxShadow: '0 0 10px #4ade80'
          }}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          AI株式診断分析
        </h1>
      </div>

      <div className="text-center space-y-3 max-w-2xl">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          AI株式診断
        </h2>
        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          最新のAI技術を活用して、株式市場のトレンドとデータを分析します。
          <br />
          銘柄コードを入力するだけで、即座に詳細な診断レポートを提供します。
        </p>
      </div>
    </div>
  );
}

export default function AIAccuracyChart() {
  return (
    <div className="bg-gradient-to-br">
      <div >
        <h3 >AI株価予測精度</h3>
        <p >機械学習モデルによる高精度分析</p>
      </div>

      <div >
        <div className="bg-white">
          <div >94%</div>
          <div >トレンド予測</div>
        </div>
        <div className="bg-white">
          <div >87%</div>
          <div >価格変動予測</div>
        </div>
        <div className="bg-white">
          <div >91%</div>
          <div >リスク評価</div>
        </div>
      </div>

      <div >
        <div>
          <div >
            <span >テクニカル分析</span>
            <span >96%</span>
          </div>
          <div className="bg-gray-200">
            <div
              className="bg-gradient-to-r"
              
            ></div>
          </div>
        </div>

        <div>
          <div >
            <span >ファンダメンタル分析</span>
            <span >89%</span>
          </div>
          <div className="bg-gray-200">
            <div
              className="bg-gradient-to-r"
              
            ></div>
          </div>
        </div>

        <div>
          <div >
            <span >センチメント分析</span>
            <span >92%</span>
          </div>
          <div className="bg-gray-200">
            <div
              className="bg-gradient-to-r"
              
            ></div>
          </div>
        </div>

        <div>
          <div >
            <span >機械学習モデル</span>
            <span >95%</span>
          </div>
          <div className="bg-gray-200">
            <div
              className="bg-gradient-to-r"
              
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div >
          <svg  fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span >最新AIモデル ver.2.5 使用中</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes grow-bar {
          from {
            width: 0;
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }
        .animate-grow-bar {
          animation: grow-bar 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

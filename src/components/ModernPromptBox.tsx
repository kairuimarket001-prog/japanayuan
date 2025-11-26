interface ModernPromptBoxProps {
  stockName?: string;
  stockCode?: string;
}

export default function ModernPromptBox({ stockName, stockCode }: ModernPromptBoxProps) {
  return (
    <div  >
      <div className="bg-white/10">
        {stockName && stockCode ? (
          <p >
            <span >
              {stockName}（{stockCode}）
            </span>
            の分析準備が完了しました
            <br />
            下のボタンをクリックして、AIレポートを受け取りましょう
          </p>
        ) : (
          <p >
            株式コードを入力すると、AIが
            <span > 指標</span>、
            <span >データ</span>、
            <span >トレンド</span>
            を分析し、短時間で結果をご提供します
          </p>
        )}
      </div>
    </div>
  );
}

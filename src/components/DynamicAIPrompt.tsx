import { Hand } from 'lucide-react';

interface DynamicAIPromptProps {
  stockName?: string;
  stockCode?: string;
  onStockNameClick?: () => void;
}

export default function DynamicAIPrompt({ stockName, stockCode, onStockNameClick }: DynamicAIPromptProps) {
  return (
    <div >
      <div className="bg-white/95">
        {stockName ? (
          <p >
            お客様が照会したい可能性のある銘柄を検出しました{' '}
            <span >
              <div  >
                <Hand  />
              </div>
              <span
                onClick={onStockNameClick}
                className="bg-yellow-200 bg-yellow-300"
              >
                {stockName}
              </span>
            </span>{' '}
            の指標、データ、トレンドをAIが分析し、短時間で結果を提供します
          </p>
        ) : (
          <p >
            株式コードを入力すると、AIが株式の指標、データ、トレンドを分析し、短時間で結果を提供します
          </p>
        )}
      </div>
    </div>
  );
}

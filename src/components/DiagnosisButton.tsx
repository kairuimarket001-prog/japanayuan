import { Sparkles, Zap } from 'lucide-react';

interface DiagnosisButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function DiagnosisButton({ onClick, disabled = false }: DiagnosisButtonProps) {
  return (
    <div >
      <div className="bg-gradient-to-r"></div>
      <button
        onClick={onClick}
        disabled={disabled}
        className="bg-gradient-to-r"
      >
        <div >
          <div >
            <Sparkles  />
            <Zap  />
          </div>
          <div >
            <div >AI診断を受ける</div>
            <div >最新AIで徹底分析</div>
          </div>
        </div>

        <div className="bg-white">
          無料
        </div>
      </button>
    </div>
  );
}

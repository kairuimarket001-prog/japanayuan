import { X, ExternalLink, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import AnalysisRenderer from './AnalysisRenderer';
import AIAccuracyChart from './AIAccuracyChart';

interface DiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: string;
  stockCode: string;
  stockName: string;
  onLineConversion: () => void;
  onReportDownload: () => void;
  isStreaming?: boolean;
  isConnecting?: boolean;
}

export default function DiagnosisModal({
  isOpen,
  onClose,
  analysis,
  stockCode,
  stockName,
  onLineConversion,
  onReportDownload,
  isStreaming = false,
  isConnecting = false,
}: DiagnosisModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const lastLengthRef = useRef(0);

  useEffect(() => {
    if (isStreaming && contentRef.current && analysis.length > lastLengthRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
      lastLengthRef.current = analysis.length;
    }
  }, [analysis, isStreaming]);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.removeAttribute('data-modal-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-75" style={{ touchAction: 'none' }}>
      <div className="relative w-full max-w-3xl max-h-[90vh]">
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden border-2" style={{ touchAction: 'auto', borderColor: '#0ea5e9' }}>
          <div
            className="sticky top-0 px-6 py-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' }}
          >
          <div className="flex-1 text-center">
            <h2 className="text-sm font-bold text-white">
              {stockName}（{stockCode}）AI分析レポート
            </h2>
            {isConnecting && (
              <div className="flex items-center gap-2 text-white text-sm justify-center mt-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AIサーバーに接続中...</span>
              </div>
            )}
            {isStreaming && !isConnecting && (
              <div className="flex items-center gap-2 text-white text-sm justify-center mt-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>レポート生成中...</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors ml-4 hover:bg-white/20"
            aria-label="閉じる"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div ref={contentRef} className="overflow-y-auto max-h-[calc(90vh-180px)] px-6 py-6">
          <div className="mb-6">

            <div className="rounded-xl p-6 shadow-inner relative border" style={{ backgroundColor: '#f0f9ff', borderColor: '#7dd3fc' }}>
              <div className="prose prose-sm max-w-none">
                {isConnecting ? (
                  <div className="text-center py-8">
                    <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" style={{ color: '#0ea5e9' }} />
                    <p className="font-semibold" style={{ color: '#0c4a6e' }}>AI分析中...</p>
                    <p className="text-sm mt-2" style={{ color: '#0284c7' }}>処理中...</p>
                  </div>
                ) : (
                  <div>
                    <AnalysisRenderer text={analysis} />
                    {isStreaming && (
                      <span className="inline-block w-2 h-5 animate-pulse ml-1" style={{ backgroundColor: '#0ea5e9' }}></span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={onLineConversion}
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm mt-6"
            >
              <ExternalLink className="w-6 h-6 flex-shrink-0" />
              <span>LINEで毎日AIレポートを受け取る</span>
            </button>

            <div className="mt-3 p-4 rounded-lg border" style={{ backgroundColor: '#fff7ed', borderColor: '#fb923c' }}>
              <div className="flex items-start gap-2 mb-2">
                <ExternalLink className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#ea580c' }} />
                <p className="text-sm font-bold" style={{ color: '#9a3412' }}>
                  【重要】外部サービスへの移動について
                </p>
              </div>
              <ul className="text-xs text-gray-800 leading-relaxed space-y-1.5 ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-0.5">•</span>
                  <span>このボタンをクリックすると、<strong>LINE公式アプリまたはLINE公式サイト（第三者サービス）に移動</strong>します。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-0.5">•</span>
                  <span>LINEは当サービスとは<strong>独立した別のサービス</strong>です。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span><strong className="text-green-700">完全無料</strong>：LINEへの移動後も追加料金は一切かかりません。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>LINE友だち追加で毎日最新のAI分析レポートが受け取れます。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

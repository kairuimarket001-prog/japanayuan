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
    <div className="bg-black bg-opacity-75" >
      <div >
        <div className="bg-white" >
          <div
            
            style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'}}
          >
          <div >
            <h2 >
              {stockName}（{stockCode}）AI分析レポート
            </h2>
            {isConnecting && (
              <div >
                <Loader2  />
                <span>AIサーバーに接続中...</span>
              </div>
            )}
            {isStreaming && !isConnecting && (
              <div >
                <Loader2  />
                <span>レポート生成中...</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="bg-white/20"
            aria-label="閉じる"
          >
            <X  />
          </button>
        </div>

        <div ref={contentRef} >
          <div >

            <div  style={{backgroundColor: '#f0f9ff'}}>
              <div >
                {isConnecting ? (
                  <div >
                    <Loader2   />
                    <p  >AI分析中...</p>
                    <p  >処理中...</p>
                  </div>
                ) : (
                  <div>
                    <AnalysisRenderer text={analysis} />
                    {isStreaming && (
                      <span  style={{backgroundColor: '#0ea5e9'}}></span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={onLineConversion}
              className="bg-gradient-to-r"
            >
              <ExternalLink  />
              <span>LINEで定期AIレポートを受け取る</span>
            </button>

            <div  style={{backgroundColor: '#fff7ed'}}>
              <div >
                <ExternalLink   />
                <p  >
                  【重要】外部サービスへの移動について
                </p>
              </div>
              <ul >
                <li >
                  <span >•</span>
                  <span>このボタンをクリックすると、<strong>LINE公式アプリまたはLINE公式サイト（第三者サービス）に移動</strong>します。</span>
                </li>
                <li >
                  <span >•</span>
                  <span>LINEは当サービスとは<strong>独立した別のサービス</strong>です。</span>
                </li>
                <li >
                  <span >✓</span>
                  <span><strong >現在無料</strong>：LINEへの移動後も現在追加料金はかかりません。</span>
                </li>
                <li >
                  <span >✓</span>
                  <span>LINE友だち追加で定期的に最新のAI分析レポートが受け取れます（配信頻度はサービス状況によります）。</span>
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

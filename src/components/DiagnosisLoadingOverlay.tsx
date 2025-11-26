import { useEffect, useState } from 'react';

interface DiagnosisLoadingOverlayProps {
  isVisible: boolean;
  progress: number;
  onComplete?: () => void;
}

export default function DiagnosisLoadingOverlay({
  isVisible,
  progress,
  onComplete
}: DiagnosisLoadingOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (progress >= 100 && isVisible) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isVisible) {
      setIsExiting(false);
    }
  }, [progress, isVisible, onComplete]);

  useEffect(() => {
    if (isVisible) {
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
  }, [isVisible]);

  if (!isVisible && !isExiting) return null;

  return (
    <div
      className={`fixed inset-0 z-[9997] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      
    >
      <div className={`w-[95%] max-w-2xl transition-transform duration-500 ${
        isExiting ? 'scale-95' : 'scale-100'
      }`}>
        <div
          
          style={{background: 'linear-gradient(to bottom right, #3A3452, #4A4563, #3A3452)'}}
        >
          <div >
            <div >
              <div
                
                style={{background: 'linear-gradient(to bottom right, #8B83FF, #6B63FF)'}}
              ></div>
              <div
                
                style={{background: 'linear-gradient(to bottom right, #A78BFA, #8B83FF)'}}
              >
                <span >🤖</span>
              </div>
            </div>
          </div>

          <div >
            <h3 >AI分析を実行中</h3>
            <p  >市場データを深度分析しています...</p>
          </div>

          <div className="bg-gray-800/50" >
            <div
              
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(to right, #8B83FF, #6B63FF)',
                boxShadow: '0 0 20px rgba(139, 131, 255, 0.5)'
              }}
            />
          </div>

          <div >
            <span  >
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>

          <div className="bg-gray-900/40" >
            <div >
              <p >
                📊 AIが複数の指標を総合的に評価中
              </p>
              <p  >
                しばらくお待ちください
              </p>
              <div >
                <p >
                  すべてのデータは公開されている市場情報を使用しており、公開市場データに基づいて分析を行っています。本分析は最新のAI技術により、財務指標、業界動向、市場トレンドを総合的に評価しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

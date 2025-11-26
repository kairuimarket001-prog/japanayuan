import { Shield, Lock, Zap, TrendingUp } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div >
      <div >
        <div className="bg-gradient-to-br">
          <div >
            <div className="bg-gradient-to-r">
              <Shield  />
            </div>
          </div>
          <p >現在無料</p>
          <p >無料でご利用可能</p>
        </div>

        <div className="bg-gradient-to-br">
          <div >
            <div className="bg-gradient-to-r">
              <Lock  />
            </div>
          </div>
          <p >安全保護</p>
          <p >データ暗号化</p>
        </div>

        <div className="bg-gradient-to-br">
          <div >
            <div className="bg-gradient-to-r">
              <Zap  />
            </div>
          </div>
          <p >迅速分析</p>
          <p >短時間で完了</p>
        </div>

        <div className="bg-gradient-to-br">
          <div >
            <div className="bg-gradient-to-r">
              <TrendingUp  />
            </div>
          </div>
          <p >AI分析</p>
          <p >詳細分析</p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Activity, Database, Zap, TrendingUp } from 'lucide-react';
import { apiClient } from '../lib/apiClient';

interface RateLimitStatus {
  rpm: { current: number; limit: number; remaining: number };
  rpd: { current: number; limit: number; remaining: number };
}

interface TodayStats {
  totals: {
    requests_total: number;
    cache_hits: number;
    api_calls: number;
    errors_count: number;
  };
  cacheHitRate: string;
}

interface StatsData {
  rateLimit: RateLimitStatus;
  today: TodayStats;
}

export default function ApiStatsDisplay() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await apiClient.get('/api/gemini/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!stats) return null;

  const cacheHitRate = parseFloat(stats.today.cacheHitRate);
  const apiUsagePercent = (stats.rateLimit.rpd.current / stats.rateLimit.rpd.limit) * 100;

  return (
    <div >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br"
          title="API統計を表示"
        >
          <Activity  />
        </button>
      ) : (
        <div className="bg-dark-secondary">
          <div >
            <h3 >
              <Activity  />
              API統計
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              
            >
              ×
            </button>
          </div>

          <div >
            <div className="bg-dark-card">
              <div >
                <Database  />
                <span >キャッシュ効率</span>
              </div>
              <div >{cacheHitRate.toFixed(1)}%</div>
              <div >
                {stats.today.totals.cache_hits} / {stats.today.totals.requests_total} リクエスト
              </div>
            </div>

            <div className="bg-dark-card">
              <div >
                <Zap  />
                <span >今日のAPI使用</span>
              </div>
              <div >
                {stats.rateLimit.rpd.current} / {stats.rateLimit.rpd.limit}
              </div>
              <div className="bg-dark-primary">
                <div
                  className={`h-2 rounded-full transition-all ${
                    apiUsagePercent > 80 ? 'bg-red-500' : apiUsagePercent > 50 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(apiUsagePercent, 100)}%` }}
                />
              </div>
              <div >残り {stats.rateLimit.rpd.remaining} 回</div>
            </div>

            <div className="bg-dark-card">
              <div >
                <TrendingUp  />
                <span >分あたりレート</span>
              </div>
              <div >
                {stats.rateLimit.rpm.current} / {stats.rateLimit.rpm.limit}
              </div>
              <div >現在の使用状況</div>
            </div>

            {stats.today.totals.errors_count > 0 && (
              <div className="bg-dark-card">
                <div >
                  エラー: {stats.today.totals.errors_count} 件
                </div>
              </div>
            )}
          </div>

          <div >
            <div >
              30秒ごとに自動更新
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Save, CheckCircle, AlertCircle, BarChart3, Eye, EyeOff } from 'lucide-react';
import { apiClient } from '../lib/apiClient';

interface GoogleTrackingConfig {
  google_ads_conversion_id: string;
  ga4_measurement_id: string;
  conversion_action_id: string;
  is_enabled: boolean;
}

export default function GoogleTrackingTab() {
  const [config, setConfig] = useState<GoogleTrackingConfig>({
    google_ads_conversion_id: '',
    ga4_measurement_id: '',
    conversion_action_id: '',
    is_enabled: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Loading Google tracking config...');
      const response = await apiClient.get('/api/google-tracking');
      const data = await response.json();
      console.log('Received config data:', data);
      if (data.success && data.config) {
        setConfig(data.config);
        console.log('Config loaded successfully');
      } else {
        setError('加载失败：服务器返回错误');
      }
    } catch (error) {
      console.error('Failed to load Google tracking config:', error);
      setError(`加载失败: ${error instanceof Error ? error.message : '网络错误'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveSuccess(false);

    try {
      const response = await apiClient.post('/api/google-tracking', config);
      const data = await response.json();

      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);

        window.location.reload();
      }
    } catch (error) {
      console.error('Failed to save Google tracking config:', error);
      alert('保存配置失败');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div >
        <div ></div>
        <p >加载追踪配置...</p>
      </div>
    );
  }

  return (
    <div >
      {/* Header */}
      <div>
        <h2 >Google 追踪配置</h2>
        <p >配置 Google Ads 和 Google Analytics 4 追踪代码</p>
      </div>

      {/* Status Banner */}
      <div className={`rounded-xl shadow-sm border p-4 ${
        config.is_enabled
          ? 'bg-green-50 border-green-200'
          : 'bg-amber-50 border-amber-200'
      }`}>
        <div >
          {config.is_enabled ? (
            <>
              <div className="bg-green-100">
                <Eye  />
              </div>
              <div>
                <div >追踪代码已启用</div>
                <div >Google 追踪脚本已在前端页面加载</div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-amber-100">
                <EyeOff  />
              </div>
              <div>
                <div >追踪代码未启用</div>
                <div >配置完成后启用追踪功能</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Configuration Form */}
      <div className="bg-white">
        <div >
          {/* Google Ads Conversion ID */}
          <div>
            <label >
              <div >
                <BarChart3  />
                Google Ads 转化跟踪 ID
              </div>
            </label>
            <input
              type="text"
              value={config.google_ads_conversion_id}
              onChange={(e) => setConfig({ ...config, google_ads_conversion_id: e.target.value })}
              placeholder="AW-XXXXXXXXXX"
              
            />
            <p >
              格式: AW-XXXXXXXXXX (从 Google Ads 转化跟踪页面获取)
            </p>
          </div>

          {/* GA4 Measurement ID */}
          <div>
            <label >
              <div >
                <BarChart3  />
                Google Analytics 4 测量 ID
              </div>
            </label>
            <input
              type="text"
              value={config.ga4_measurement_id}
              onChange={(e) => setConfig({ ...config, ga4_measurement_id: e.target.value })}
              placeholder="G-XXXXXXXXXX"
              
            />
            <p >
              格式: G-XXXXXXXXXX (从 Google Analytics 4 数据流详情获取)
            </p>
          </div>

          {/* Conversion Action ID */}
          <div>
            <label >
              <div >
                <BarChart3  />
                转化操作 ID
              </div>
            </label>
            <input
              type="text"
              value={config.conversion_action_id}
              onChange={(e) => setConfig({ ...config, conversion_action_id: e.target.value })}
              placeholder="AW-XXXXXXXXXX/YYYYYYYYYY"
              
            />
            <p >
              格式: AW-XXXXXXXXXX/YYYYYYYYYY (完整的转化操作 ID)
            </p>
          </div>

          {/* Enable Toggle */}
          <div >
            <input
              type="checkbox"
              id="is_enabled"
              checked={config.is_enabled}
              onChange={(e) => setConfig({ ...config, is_enabled: e.target.checked })}
              
            />
            <label htmlFor="is_enabled" >
              启用 Google 追踪代码
            </label>
          </div>

          {/* Information Box */}
          <div className="bg-blue-50">
            <div >
              <AlertCircle  />
              <div >
                <p >使用说明：</p>
                <ul >
                  <li>填写配置后点击"保存配置"按钮</li>
                  <li>启用追踪后，Google 脚本将自动加载到前端页面</li>
                  <li>当用户点击诊断结果的 LINE 按钮时，将触发转化事件</li>
                  <li>可以在 Google Ads 和 Google Analytics 中查看转化数据</li>
                  <li>如需测试，可以在浏览器控制台查看追踪事件日志</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div >
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-blue-600 bg-blue-700 bg-slate-400"
        >
          {saving ? (
            <>
              <div  />
              保存中...
            </>
          ) : (
            <>
              <Save  />
              保存配置
            </>
          )}
        </button>

        {saveSuccess && (
          <div >
            <CheckCircle  />
            配置保存成功！页面将刷新以应用新配置
          </div>
        )}
      </div>

      {/* Current Configuration Display */}
      {(config.google_ads_conversion_id || config.ga4_measurement_id) && (
        <div className="bg-slate-50">
          <h3 >当前配置</h3>
          <div >
            {config.google_ads_conversion_id && (
              <div >
                <span >Google Ads:</span>
                <span >{config.google_ads_conversion_id}</span>
              </div>
            )}
            {config.ga4_measurement_id && (
              <div >
                <span >GA4:</span>
                <span >{config.ga4_measurement_id}</span>
              </div>
            )}
            {config.conversion_action_id && (
              <div >
                <span >转化操作:</span>
                <span >{config.conversion_action_id}</span>
              </div>
            )}
            <div >
              <span >状态:</span>
              <span className={`font-semibold ${config.is_enabled ? 'text-green-600' : 'text-amber-600'}`}>
                {config.is_enabled ? '已启用' : '未启用'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

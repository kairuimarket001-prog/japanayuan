import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle } from 'lucide-react';
import { adminAuth } from '../lib/adminAuth';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await adminAuth.login(username, password);

    if (result.success) {
      navigate('/adsadmin/dashboard');
    } else {
      setError(result.error || '登录失败');
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br">
      <div >
        <div className="bg-white">
          <div >
            <div className="bg-slate-900">
              <Lock  />
            </div>
            <h1 >广告管理后台</h1>
            <p >请登录以访问管理系统</p>
          </div>

          <form onSubmit={handleSubmit} >
            {error && (
              <div className="bg-red-50">
                <AlertCircle  />
                <p >{error}</p>
              </div>
            )}

            <div>
              <label >
                用户名
              </label>
              <div >
                <User  />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  
                  placeholder="请输入用户名"
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div>
              <label >
                密码
              </label>
              <div >
                <Lock  />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                  placeholder="请输入密码"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-slate-900 bg-slate-800"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>
        </div>

        <p >
          仅限授权人员访问
        </p>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link2, Plus, Trash2, Edit2, Save, X, BarChart3, Power } from 'lucide-react';
import { apiClient } from '../lib/apiClient';

interface LineRedirectLink {
  id: string;
  redirect_url: string;
  weight: number;
  is_active: number;
  hit_count: number;
  created_at: string;
  updated_at: string;
}

export default function LineRedirectsTab() {
  const [links, setLinks] = useState<LineRedirectLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLink, setNewLink] = useState({ redirect_url: '', weight: 50 });
  const [editForm, setEditForm] = useState({ redirect_url: '', weight: 50 });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLinks();
  }, []);

  const loadLinks = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Loading LINE redirect links...');
      const response = await apiClient.get('/api/line-redirects');
      const data = await response.json();
      console.log('Received data:', data);
      if (data.success) {
        setLinks(data.links);
        console.log('Links loaded successfully:', data.links.length);
      } else {
        setError('加载失败：服务器返回错误');
      }
    } catch (error) {
      console.error('Failed to load LINE redirect links:', error);
      setError(`加载失败: ${error instanceof Error ? error.message : '网络错误'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddLink = async () => {
    if (!newLink.redirect_url.includes('line.me')) {
      alert('请输入有效的LINE链接（必须包含 line.me）');
      return;
    }

    setSaving(true);
    try {
      const response = await apiClient.post('/api/line-redirects', newLink);
      const data = await response.json();

      if (data.success) {
        await loadLinks();
        setShowAddForm(false);
        setNewLink({ line_url: '', weight: 50 });
        alert('链接创建成功！');
      } else {
        alert('创建失败，请重试');
      }
    } catch (error) {
      console.error('Failed to add link:', error);
      alert('添加链接失败: ' + (error instanceof Error ? error.message : '未知错误'));
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateLink = async (id: string) => {
    if (!editForm.redirect_url.includes('line.me')) {
      alert('请输入有效的LINE链接（必须包含 line.me）');
      return;
    }

    try {
      const response = await apiClient.put(`/api/line-redirects/${id}`, editForm);

      if (response.ok) {
        await loadLinks();
        setEditingId(null);
      }
    } catch (error) {
      console.error('Failed to update link:', error);
      alert('更新链接失败');
    }
  };

  const handleDeleteLink = async (id: string) => {
    if (!confirm('确定要删除这个链接吗？')) {
      return;
    }

    try {
      const response = await apiClient.delete(`/api/line-redirects/${id}`);

      if (response.ok) {
        await loadLinks();
      }
    } catch (error) {
      console.error('Failed to delete link:', error);
      alert('删除链接失败');
    }
  };

  const handleToggleActive = async (link: LineRedirectLink) => {
    try {
      const response = await apiClient.put(`/api/line-redirects/${link.id}`, { is_active: link.is_active ? 0 : 1 });

      if (response.ok) {
        await loadLinks();
      }
    } catch (error) {
      console.error('Failed to toggle link status:', error);
      alert('切换状态失败');
    }
  };

  const startEdit = (link: LineRedirectLink) => {
    setEditingId(link.id);
    setEditForm({ redirect_url: link.redirect_url, weight: link.weight });
  };

  const totalWeight = links.filter(l => l.is_active).reduce((sum, l) => sum + l.weight, 0);

  if (loading) {
    return (
      <div >
        <div ></div>
        <p >加载分流链接...</p>
        {error && (
          <div className="bg-red-50">
            <p >{error}</p>
            <button
              onClick={loadLinks}
              className="bg-red-600 bg-red-700"
            >
              重试
            </button>
          </div>
        )}
      </div>
    );
  }

  if (error && !loading) {
    return (
      <div >
        <div className="bg-red-50">
          <p >{error}</p>
          <button
            onClick={loadLinks}
            className="bg-red-600 bg-red-700"
          >
            重新加载
          </button>
        </div>
      </div>
    );
  }

  return (
    <div >
      {/* Header */}
      <div >
        <div>
          <h2 >LINE分流链接管理</h2>
          <p >创建和管理多个LINE链接，系统将根据权重自动分配流量</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 bg-blue-700"
        >
          {showAddForm ? <X  /> : <Plus  />}
          {showAddForm ? '取消' : '添加链接'}
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="bg-white">
          <h3 >添加新的LINE链接</h3>
          <div >
            <div>
              <label >
                LINE URL <span >*</span>
              </label>
              <input
                type="text"
                value={newLink.redirect_url}
                onChange={(e) => setNewLink({ ...newLink, redirect_url: e.target.value })}
                placeholder="https://line.me/R/ti/p/@example"
                
              />
            </div>
            <div>
              <label >
                权重 (1-100) <span >*</span>
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={newLink.weight}
                onChange={(e) => setNewLink({ ...newLink, weight: parseInt(e.target.value) || 1 })}
                
              />
              <p >权重越高，被选中的概率越大</p>
            </div>
            <div >
              <button
                onClick={handleAddLink}
                disabled={saving}
                className="bg-green-600 bg-green-700 bg-slate-400"
              >
                {saving ? (
                  <>
                    <div  />
                    保存中...
                  </>
                ) : (
                  <>
                    <Save  />
                    保存
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setNewLink({ redirect_url: '', weight: 50 });
                }}
                className="bg-slate-200 bg-slate-300"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Weight Distribution */}
      <div className="bg-gradient-to-r">
        <div >
          <BarChart3  />
          <h3 >权重分布</h3>
        </div>
        <div >总权重: {totalWeight}</div>
        <p >
          活跃链接: {links.filter(l => l.is_active).length} / {links.length}
        </p>
      </div>

      {/* Links List */}
      <div >
        {links.length === 0 ? (
          <div className="bg-white">
            <Link2  />
            <p >还没有创建任何分流链接</p>
            <p >点击上方"添加链接"按钮开始创建</p>
          </div>
        ) : (
          links.map((link) => (
            <div
              key={link.id}
              className={`bg-white rounded-xl shadow-sm border transition ${
                link.is_active ? 'border-slate-200' : 'border-slate-300 bg-slate-50'
              }`}
            >
              {editingId === link.id ? (
                <div >
                  <div >
                    <div>
                      <label >LINE URL</label>
                      <input
                        type="text"
                        value={editForm.redirect_url}
                        onChange={(e) => setEditForm({ ...editForm, redirect_url: e.target.value })}
                        
                      />
                    </div>
                    <div>
                      <label >权重</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={editForm.weight}
                        onChange={(e) => setEditForm({ ...editForm, weight: parseInt(e.target.value) || 1 })}
                        
                      />
                    </div>
                    <div >
                      <button
                        onClick={() => handleUpdateLink(link.id)}
                        className="bg-green-600 bg-green-700"
                      >
                        <Save  />
                        保存
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-slate-200 bg-slate-300"
                      >
                        取消
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div >
                  <div >
                    <div >
                      <div >
                        <Link2 className={`w-5 h-5 ${link.is_active ? 'text-blue-600' : 'text-slate-400'}`} />
                        <a
                          href={link.redirect_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          
                        >
                          {link.redirect_url}
                        </a>
                      </div>
                      <div >
                        <div>
                          <span >权重:</span>{' '}
                          <span >{link.weight}</span>
                        </div>
                        <div>
                          <span >命中次数:</span>{' '}
                          <span >{link.hit_count}</span>
                        </div>
                        {totalWeight > 0 && link.is_active && (
                          <div>
                            <span >概率:</span>{' '}
                            <span >
                              {((link.weight / totalWeight) * 100).toFixed(1)}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div >
                      <button
                        onClick={() => handleToggleActive(link)}
                        className={`p-2 rounded-lg transition ${
                          link.is_active
                            ? 'bg-green-100 text-green-600 hover:bg-green-200'
                            : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                        }`}
                        title={link.is_active ? '禁用' : '启用'}
                      >
                        <Power  />
                      </button>
                      <button
                        onClick={() => startEdit(link)}
                        className="bg-blue-100 bg-blue-200"
                        title="编辑"
                      >
                        <Edit2  />
                      </button>
                      <button
                        onClick={() => handleDeleteLink(link.id)}
                        className="bg-red-100 bg-red-200"
                        title="删除"
                      >
                        <Trash2  />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

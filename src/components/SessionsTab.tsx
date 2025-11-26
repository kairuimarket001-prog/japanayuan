import { useState, useEffect } from 'react';
import {
  Globe,
  MousePointerClick,
  CheckCircle,
  Clock,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { apiClient } from '../lib/apiClient';

interface UserSession {
  id: string;
  session_id: string;
  stock_code: string;
  stock_name: string;
  url_params: Record<string, string>;
  first_visit_at: string;
  converted: number;
  converted_at: string | null;
  events?: UserEvent[];
}

interface UserEvent {
  id: string;
  event_type: string;
  event_data: Record<string, any>;
  stock_code: string;
  stock_name: string;
  duration_ms: number | null;
  gclid: string | null;
  created_at: string;
}

export default function SessionsTab() {
  const [sessions, setSessions] = useState<UserSession[]>([]);
  const [events, setEvents] = useState<Record<string, UserEvent[]>>({});
  const [loading, setLoading] = useState(true);
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterConverted, setFilterConverted] = useState<'all' | 'converted' | 'not_converted'>('all');

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get('/api/admin/sessions?days=7&limit=100');
      const data = await response.json();

      if (data.sessions) {
        setSessions(data.sessions);

        const eventsBySession: Record<string, UserEvent[]> = {};
        data.sessions.forEach(session => {
          if (session.events) {
            eventsBySession[session.session_id] = session.events;
          }
        });
        setEvents(eventsBySession);
      }
    } catch (error) {
      console.error('Failed to load sessions:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSession = (sessionId: string) => {
    const newExpanded = new Set(expandedSessions);
    if (newExpanded.has(sessionId)) {
      newExpanded.delete(sessionId);
    } else {
      newExpanded.add(sessionId);
    }
    setExpandedSessions(newExpanded);
  };

  const filteredSessions = sessions.filter(session => {
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        session.stock_code?.toLowerCase().includes(searchLower) ||
        session.stock_name?.toLowerCase().includes(searchLower) ||
        session.url_params?.gclid?.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Conversion filter
    if (filterConverted === 'converted' && !session.converted) return false;
    if (filterConverted === 'not_converted' && session.converted) return false;

    return true;
  });

  if (loading) {
    return (
      <div >
        <div ></div>
        <p >加载会话数据...</p>
      </div>
    );
  }

  return (
    <div >
      {/* Filters */}
      <div className="bg-white">
        <div >
          {/* Search */}
          <div >
            <div >
              <Search  />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索股票代码、股票名称或gclid..."
                
              />
            </div>
          </div>

          {/* Conversion Filter */}
          <div >
            <Filter  />
            <select
              value={filterConverted}
              onChange={(e) => setFilterConverted(e.target.value as any)}
              
            >
              <option value="all">全部会话</option>
              <option value="converted">已转化</option>
              <option value="not_converted">未转化</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sessions List */}
      <div >
        <div >
          <h3 >
            用户会话 ({filteredSessions.length})
          </h3>
        </div>

        {filteredSessions.length === 0 ? (
          <div className="bg-white">
            <p >没有找到匹配的会话</p>
          </div>
        ) : (
          filteredSessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              events={events[session.session_id] || []}
              isExpanded={expandedSessions.has(session.session_id)}
              onToggle={() => toggleSession(session.session_id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface SessionCardProps {
  session: UserSession;
  events: UserEvent[];
  isExpanded: boolean;
  onToggle: () => void;
}

function SessionCard({ session, events, isExpanded, onToggle }: SessionCardProps) {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="bg-white">
      {/* Session Header */}
      <div
        onClick={onToggle}
        className="bg-slate-50"
      >
        <div >
          <div >
            <div >
              <div className="bg-blue-100">
                <span >
                  {session.stock_code || 'N/A'}
                </span>
                <span >
                  {session.stock_name || 'Unknown'}
                </span>
              </div>
              {session.converted && (
                <span className="bg-green-100">
                  <CheckCircle  />
                  已转化
                </span>
              )}
            </div>
            <div >
              <div >
                <Clock  />
                <span>{formatTime(session.first_visit_at)}</span>
              </div>
              <div >
                <Globe  />
                <span>来源: {session.url_params?.src || '直接访问'}</span>
              </div>
              {session.url_params?.gclid && (
                <div >
                  <ExternalLink  />
                  <span >
                    {session.url_params.gclid.substring(0, 12)}...
                  </span>
                </div>
              )}
            </div>
          </div>
          <div>
            {isExpanded ? (
              <ChevronUp  />
            ) : (
              <ChevronDown  />
            )}
          </div>
        </div>
      </div>

      {/* Session Timeline */}
      {isExpanded && (
        <div className="bg-slate-50">
          <h4 >用户行为时间线</h4>
          <div >
            {events.map((event, index) => (
              <EventItem key={event.id} event={event} isLast={index === events.length - 1} />
            ))}
            {events.length === 0 && (
              <p >暂无事件记录</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface EventItemProps {
  event: UserEvent;
  isLast: boolean;
}

function EventItem({ event, isLast }: EventItemProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'page_load':
        return <Globe  />;
      case 'diagnosis_click':
        return <MousePointerClick  />;
      case 'conversion':
        return <CheckCircle  />;
      default:
        return <Clock  />;
    }
  };

  const getEventTitle = (type: string) => {
    switch (type) {
      case 'page_load':
        return '加载网站';
      case 'diagnosis_click':
        return '诊断股票';
      case 'conversion':
        return '转化成功';
      default:
        return type;
    }
  };

  const getEventBgColor = (type: string) => {
    switch (type) {
      case 'page_load':
        return 'bg-blue-100 border-blue-300';
      case 'diagnosis_click':
        return 'bg-purple-100 border-purple-300';
      case 'conversion':
        return 'bg-green-100 border-green-300';
      default:
        return 'bg-slate-100 border-slate-300';
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div >
      <div >
        <div className={`p-2 rounded-lg border-2 ${getEventBgColor(event.event_type)}`}>
          {getEventIcon(event.event_type)}
        </div>
        {!isLast && <div className="bg-slate-300"  />}
      </div>
      <div >
        <div >
          <h5 >{getEventTitle(event.event_type)}</h5>
          <span >{formatTime(event.created_at)}</span>
        </div>
        <div >
          {event.event_type === 'page_load' && (
            <>
              <p>股票代码: <span >{event.stock_code}</span></p>
              <p>股票名称: <span >{event.stock_name}</span></p>
              {event.event_data?.url && (
                <p >URL: {event.event_data.url}</p>
              )}
            </>
          )}
          {event.event_type === 'diagnosis_click' && (
            <>
              <p>股票名称: <span >{event.stock_name}</span></p>
              {event.duration_ms && (
                <p>加载时长: <span >{(event.duration_ms / 1000).toFixed(2)}秒</span></p>
              )}
            </>
          )}
          {event.event_type === 'conversion' && (
            <>
              {event.gclid && (
                <p>GCLID: <span >{event.gclid}</span></p>
              )}
              <p>转换时间: <span >{formatTime(event.created_at)}</span></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

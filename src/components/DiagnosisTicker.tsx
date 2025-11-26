const diagnosisRecords = [
  { time: '2分前', stock: 'トヨタ自動車', icon: '👨' },
  { time: '5分前', stock: 'ソニーグループ', icon: '👩' },
  { time: '8分前', stock: '任天堂', icon: '👨' },
  { time: '12分前', stock: 'ソフトバンクグループ', icon: '👩' },
  { time: '15分前', stock: 'キーエンス', icon: '👨' },
  { time: '18分前', stock: '三菱UFJ', icon: '👩' },
  { time: '22分前', stock: 'ファーストリテイリング', icon: '👨' },
  { time: '25分前', stock: '東京エレクトロン', icon: '👩' },
  { time: '28分前', stock: 'リクルート', icon: '👨' },
  { time: '32分前', stock: 'KDDI', icon: '👩' },
];

export default function DiagnosisTicker() {
  return (
    <div className="bg-gradient-to-r">
      <div >
        {[...diagnosisRecords, ...diagnosisRecords, ...diagnosisRecords].map((record, index) => (
          <span key={index} >
            <span className="bg-blue-500/20">
              {record.icon}
            </span>
            <span >{record.time}</span>
            <span >{record.stock}</span>
            <span className="bg-blue-500/30">無料レポート取得</span>
          </span>
        ))}
      </div>
    </div>
  );
}

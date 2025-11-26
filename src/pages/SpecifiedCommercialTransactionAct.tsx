import { ArrowLeft, FileText, Building, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecifiedCommercialTransactionAct() {
  return (
    <div className="bg-gradient-to-br">
      <div >
        <Link
          to="/"
          
        >
          <ArrowLeft  />
          トップページに戻る
        </Link>

        <div className="bg-white">
          <div >
            <div className="bg-blue-100">
              <FileText  />
            </div>
            <h1 >特定商取引法に基づく表記</h1>
          </div>

          <p >
            特定商取引法（特定商取引に関する法律）に基づき、以下の通り表記いたします。
          </p>

          <div >
            <section >
              <div >
                <div className="bg-blue-50">
                  <Building  />
                </div>
                <div >
                  <h2 >販売業者情報</h2>
                  <dl >
                    <div >
                      <dt >会社名</dt>
                      <dd >株式会社デジタルアド</dd>
                    </div>
                    <div >
                      <dt >会社名（英語）</dt>
                      <dd >DigitalAd Co., Ltd.</dd>
                    </div>
                    <div >
                      <dt >所在地</dt>
                      <dd >
                        〒163-0534<br />
                        東京都新宿区西新宿1-6-1 新宿野村ビル21階
                      </dd>
                    </div>
                    <div >
                      <dt >設立</dt>
                      <dd >2014年5月</dd>
                    </div>
                    <div >
                      <dt >業種</dt>
                      <dd >デジタル広告／データ分析／広告運用最適化</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section >
              <div >
                <div className="bg-green-50">
                  <Mail  />
                </div>
                <div >
                  <h2 >連絡先</h2>
                  <dl >
                    <div >
                      <dt >メールアドレス</dt>
                      <dd >support@ostosk.jp</dd>
                    </div>
                    <div >
                      <dt >受付時間</dt>
                      <dd >24時間受付（返信は営業日内）</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section >
              <h2 >サービス内容</h2>
              <div className="bg-slate-50">
                <h3 >提供サービス</h3>
                <ul >
                  <li >
                    <span >•</span>
                    <span>AI技術を活用した株式情報の提供および分析サービス</span>
                  </li>
                  <li >
                    <span >•</span>
                    <span>株価データ、チャート、テクニカル指標の表示</span>
                  </li>
                  <li >
                    <span >•</span>
                    <span>AI分析レポートの生成と提供</span>
                  </li>
                  <li >
                    <span >•</span>
                    <span>投資情報の提供（情報提供のみ、投資助言には該当しません）</span>
                  </li>
                </ul>
              </div>
            </section>

            <section >
              <h2 >サービス料金</h2>
              <div className="bg-blue-50">
                <div >
                  <div >
                    <div>
                      <h3 >基本サービス</h3>
                      <p >
                        株価情報の閲覧、AI診断機能、レポートダウンロード
                      </p>
                    </div>
                    <div >
                      <p >現在無料</p>
                    </div>
                  </div>
                  <div className="bg-white">
                    <p >
                      現在、当サービスは基本機能を無料で提供しております。
                      今後、プレミアム機能を追加する場合、または価格体系が変更される場合は、事前にお知らせいたします。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section >
              <h2 >お支払い方法</h2>
              <div className="bg-slate-50">
                <p >
                  現在、有料サービスは提供しておりません。
                  今後、有料プランを導入する際は、以下の決済方法を予定しております。
                </p>
                <ul >
                  <li >
                    <span >•</span>
                    <span>クレジットカード決済（Visa、Mastercard、JCB、American Express等）</span>
                  </li>
                  <li >
                    <span >•</span>
                    <span>銀行振込</span>
                  </li>
                  <li >
                    <span >•</span>
                    <span>コンビニ決済</span>
                  </li>
                </ul>
              </div>
            </section>

            <section >
              <h2 >サービス提供時期</h2>
              <div className="bg-slate-50">
                <p >
                  サービスはお申し込み後、すぐにご利用いただけます。
                  AI診断結果の生成には、通常数秒から数十秒程度のお時間をいただきます（サーバー状況により変動する場合があります）。
                </p>
              </div>
            </section>

            <section >
              <h2 >返品・キャンセルについて</h2>
              <div className="bg-slate-50">
                <h3 >無料サービスについて</h3>
                <p >
                  現在提供している無料サービスについては、
                  いつでもご利用を停止いただけます。
                </p>
                <h3 >今後提供予定の有料サービスについて</h3>
                <p >
                  デジタルコンテンツの性質上、原則として返品・返金はお受けできません。
                  ただし、以下の場合は返金対応を検討いたします。
                </p>
                <ul >
                  <li >
                    <span >•</span>
                    <span>システムの不具合により、サービスが正常に提供されなかった場合</span>
                  </li>
                  <li >
                    <span >•</span>
                    <span>当社の責に帰すべき事由により、サービス提供が不可能となった場合</span>
                  </li>
                </ul>
              </div>
            </section>

            <section >
              <h2 >個人情報の取り扱い</h2>
              <div className="bg-slate-50">
                <p >
                  お客様の個人情報は、個人情報保護法に基づき適切に管理いたします。
                  詳細は
                  <Link to="/privacy" >
                    プライバシーポリシー
                  </Link>
                  をご確認ください。
                </p>
              </div>
            </section>

            <section >
              <h2 >免責事項</h2>
              <div className="bg-amber-50">
                <p >重要なお知らせ</p>
                <div >
                  <p>
                    当サービスは、AI技術を活用した株式情報の提供および分析ツールであり、
                    投資助言業務、投資一任業務、金融商品仲介業務には該当しません。
                  </p>
                  <p>
                    提供される情報は参考情報としてご活用ください。
                    株式投資には価格変動リスク、信用リスク、流動性リスク等が伴い、
                    投資元本を割り込む可能性があります。
                  </p>
                  <p>
                    最終的な投資判断は、必ずご自身の責任において行ってください。
                    当サービスの利用により生じたいかなる損害についても、
                    当社は一切の責任を負いません。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 >お問い合わせ</h2>
              <div className="bg-blue-50">
                <p >
                  特定商取引法に関するご質問、その他お問い合わせは、
                  以下の方法でご連絡ください。
                </p>
                <div >
                  <Mail  />
                  <div>
                    <p >メール</p>
                    <p >support@ostosk.jp</p>
                    <p >24時間受付（返信は営業日内）</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="bg-blue-600 bg-blue-700"
                >
                  お問い合わせフォームへ
                </Link>
              </div>
            </section>
          </div>

          <div >
            <p >
              最終更新日: 2025年1月15日
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

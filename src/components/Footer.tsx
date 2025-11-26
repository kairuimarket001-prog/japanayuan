import { Link } from 'react-router-dom';
import { Shield, Scale, FileText, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer >
      <div >
        {/* Legal Disclosure Section - Desktop */}
        <div className="bg-slate-800/90">
          <div >
            <div className="bg-ocean-900/50">
              <Shield  />
            </div>
            <div >
              <h3 >
                <Scale  />
                金融商品取引法に基づく重要事項
              </h3>

              <div >
                <div className="bg-slate-700/70">
                  <p >【サービスの性質】</p>
                  <p>
                    本サービスは、AI技術を活用した株式情報の提供および分析ツールです。
                    <strong >投資助言業務、投資一任業務、金融商品仲介業務には該当せず、特定の金融商品の売買を推奨・勧誘するものではありません。</strong>
                  </p>
                </div>

                <div className="bg-slate-700/70">
                  <p >【投資リスクに関する警告】</p>
                  <p>
                    株式投資には価格変動リスク、信用リスク、流動性リスク等が伴い、
                    <strong >投資元本を割り込む可能性があります。</strong>
                    過去の運用実績は将来の運用成果を保証するものではありません。
                    市場環境の変化により、予想外の損失が発生する可能性があります。
                  </p>
                </div>

                <div className="bg-slate-700/70">
                  <p >【情報の正確性について】</p>
                  <p>
                    提供される情報は、信頼できると判断した情報源から取得していますが、
                    その正確性、完全性、適時性を保証するものではありません。
                    AI分析結果は参考情報として提供されるものであり、絶対的な投資判断基準ではありません。
                  </p>
                </div>

                <div className="bg-slate-700/70">
                  <p >【投資判断の責任】</p>
                  <p>
                    <strong >最終的な投資判断は、利用者ご自身の責任において行ってください。</strong>
                    本サービスの利用により生じたいかなる損害についても、当社は一切の責任を負いません。
                    投資を行う際は、証券会社等の金融商品取引業者にご相談ください。
                  </p>
                </div>

                <div className="bg-slate-700/50">
                  <p >【登録情報】</p>
                  <p >
                    当サービス提供者は金融商品取引業者（投資助言・代理業、投資運用業等）ではありません。
                    金融商品取引法第29条の登録を受けた事業者ではないため、個別の投資助言を行うことはできません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice - Mobile */}
        <div className="bg-ocean-500/10">
          <p >⚠️ 重要なお知らせ</p>
          <p >
            当サービスは情報提供のみを目的としており、投資助言や投資勧誘を行うものではありません。投資判断は必ずご自身の責任で行ってください。
          </p>
        </div>

        {/* Footer Links Section */}
        <div >
          <div >
            {/* Legal Documents */}
            <div>
              <h4 >
                <FileText  />
                法的文書
              </h4>
              <ul >
                <li>
                  <Link
                    to="/company"
                    
                  >
                    会社概要 <ExternalLink  />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    
                  >
                    利用規約 <ExternalLink  />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    
                  >
                    プライバシーポリシー <ExternalLink  />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specified-commercial-transaction-act"
                    
                  >
                    特定商取引法表記 <ExternalLink  />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 >
                <Mail  />
                お問い合わせ
              </h4>
              <ul >
                <li>
                  <Link
                    to="/contact"
                    
                  >
                    お問い合わせフォーム <ExternalLink  />
                  </Link>
                </li>
                <li >
                  <Mail  />
                  <span>support@ostosk.jp</span>
                </li>
                <li >
                  受付時間: 24時間受付（返信は営業日内）
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div >
            <p >
              &copy; {currentYear} 株式会社デジタルアド (DigitalAd Co., Ltd.). All rights reserved.
            </p>
            <p >
              当サイトで提供される情報は投資勧誘を目的としたものではありません。
              投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
              掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
            </p>

            {/* Service Information */}
            <div >
              <p>株式会社デジタルアド（DigitalAd Co., Ltd.）</p>
              <p>〒163-0534 東京都新宿区西新宿1-6-1 新宿野村ビル21階</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

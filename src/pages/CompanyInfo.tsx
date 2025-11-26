import { ArrowLeft, Building, MapPin, Calendar, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyInfo() {
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
              <Building  />
            </div>
            <h1 >会社概要</h1>
          </div>

          <div >
            <section >
              <div className="bg-gradient-to-r">
                <h2 >株式会社デジタルアド</h2>
                <p >DigitalAd Co., Ltd.</p>
              </div>
            </section>

            <section >
              <div >
                <div className="bg-slate-50">
                  <div >
                    <MapPin  />
                    <div>
                      <h3 >所在地</h3>
                      <p >
                        〒163-0534<br />
                        東京都新宿区西新宿1-6-1<br />
                        新宿野村ビル21階
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50">
                  <div >
                    <Calendar  />
                    <div>
                      <h3 >設立</h3>
                      <p >2014年5月</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section >
              <div className="bg-blue-50">
                <div >
                  <Briefcase  />
                  <div>
                    <h3 >業種</h3>
                    <p >
                      デジタル広告／データ分析／広告運用最適化
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section >
              <div >
                <Target  />
                <h3 >事業内容</h3>
              </div>

              <div >
                <div className="bg-white">
                  <h4 >
                    <span className="bg-blue-500">1</span>
                    Google広告、Yahoo! JAPAN広告等検索広告運用
                  </h4>
                  <p >
                    主要な検索広告プラットフォームを活用し、費用対効果の高い広告運用を実現します
                  </p>
                </div>

                <div className="bg-white">
                  <h4 >
                    <span className="bg-blue-500">2</span>
                    SNS広告運用（Facebook、Instagram、Twitter等）
                  </h4>
                  <p >
                    主要SNSプラットフォームでの広告運用を通じて、ターゲット層への効果的なアプローチを実現します
                  </p>
                </div>

                <div className="bg-white">
                  <h4 >
                    <span className="bg-blue-500">3</span>
                    広告の効果測定、ROI分析、転換率最適化（CRO）
                  </h4>
                  <p >
                    詳細なデータ分析により広告投資収益率を測定し、コンバージョン率の継続的な改善を実現します
                  </p>
                </div>

                <div className="bg-white">
                  <h4 >
                    <span className="bg-blue-500">4</span>
                    広告効果報告書作成、データ分析による改善提案
                  </h4>
                  <p >
                    分かりやすい報告書で広告効果を可視化し、データに基づいた具体的な改善提案を行います
                  </p>
                </div>

                <div className="bg-white">
                  <h4 >
                    <span className="bg-blue-500">5</span>
                    AIを活用した広告戦略最適化
                  </h4>
                  <p >
                    AI技術を活用して広告パフォーマンスを予測・最適化し、効率的な広告戦略を立案します
                  </p>
                </div>

                <div className="bg-white">
                  <h4 >
                    <span className="bg-blue-500">6</span>
                    大データ分析の活用
                  </h4>
                  <p >
                    大量のマーケティングデータを分析し、ビジネスの成長につながる洞察を提供します
                  </p>
                </div>
              </div>
            </section>

            <section >
              <div className="bg-gradient-to-r">
                <h3 >企業理念</h3>
                <p >
                  株式会社デジタルアドは、データ駆動型のデジタル広告ソリューションを提供することで、
                  企業のマーケティング成果を最大化することを使命としています。
                </p>
                <p >
                  AI技術と大データ分析を駆使し、広告効果の可視化からROI最適化まで、
                  包括的な広告運用サービスを通じて、お客様のビジネス成長を強力にサポートします。
                </p>
              </div>
            </section>

            <div className="bg-blue-50">
              <h3 >お問い合わせ</h3>
              <p >
                弊社サービスに関するお問い合わせは、お気軽にご連絡ください。
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 bg-blue-700"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

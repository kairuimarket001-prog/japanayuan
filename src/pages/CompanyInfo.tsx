import { ArrowLeft, Building, MapPin, Calendar, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">会社概要</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">株式会社デジタルアド</h2>
                <p className="text-lg text-gray-700 mb-2">DigitalAd Co., Ltd.</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">所在地</h3>
                      <p className="text-gray-700 leading-relaxed">
                        〒163-0534<br />
                        東京都新宿区西新宿1-6-1<br />
                        新宿野村ビル21階
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">設立</h3>
                      <p className="text-gray-700 text-lg">2014年5月</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">業種</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      デジタル広告／データ分析／広告運用最適化
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">事業内容</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Google広告、Yahoo! JAPAN広告等検索広告運用
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    主要な検索広告プラットフォームを活用し、費用対効果の高い広告運用を実現します
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    SNS広告運用（Facebook、Instagram、Twitter等）
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    主要SNSプラットフォームでの広告運用を通じて、ターゲット層への効果的なアプローチを実現します
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    広告の効果測定、ROI分析、転換率最適化（CRO）
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    詳細なデータ分析により広告投資収益率を測定し、コンバージョン率の継続的な改善を実現します
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    広告効果報告書作成、データ分析による改善提案
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    分かりやすい報告書で広告効果を可視化し、データに基づいた具体的な改善提案を行います
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    AIを活用した広告戦略最適化
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    AI技術を活用して広告パフォーマンスを予測・最適化し、効率的な広告戦略を立案します
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    大データ分析の活用
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    大量のマーケティングデータを分析し、ビジネスの成長につながる洞察を提供します
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">企業理念</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  株式会社デジタルアドは、データ駆動型のデジタル広告ソリューションを提供することで、
                  企業のマーケティング成果を最大化することを使命としています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  AI技術と大データ分析を駆使し、広告効果の可視化からROI最適化まで、
                  包括的な広告運用サービスを通じて、お客様のビジネス成長を強力にサポートします。
                </p>
              </div>
            </section>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">お問い合わせ</h3>
              <p className="text-sm text-gray-700 mb-4">
                弊社サービスに関するお問い合わせは、お気軽にご連絡ください。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
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

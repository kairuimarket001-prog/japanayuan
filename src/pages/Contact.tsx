import { ArrowLeft, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
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
              <Mail  />
            </div>
            <h1 >お問い合わせ</h1>
          </div>

          <div >
            <p >
              AI株式診断サービスをご利用いただき、誠にありがとうございます。
              ご質問、ご要望、不具合のご報告など、お気軽にお問い合わせください。
            </p>

            <section >
              <h2 >受付時間</h2>
              <div className="bg-blue-50">
                <Clock  />
                <div>
                  <p >24時間受付</p>
                  <p >
                    ※メールでのお問い合わせは24時間受け付けております<br />
                    ※ご返信は営業日（平日 9:00-18:00）内に順次対応いたします<br />
                    ※土日祝日、年末年始の返信は翌営業日となります
                  </p>
                </div>
              </div>
            </section>

            <section >
              <h2 >お問い合わせフォーム</h2>
              <form >
                <div>
                  <label htmlFor="name" >
                    お名前 <span >*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" >
                    メールアドレス <span >*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" >
                    件名 <span >*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    
                  >
                    <option value="">選択してください</option>
                    <option value="service">サービス内容について</option>
                    <option value="technical">技術的な問題</option>
                    <option value="billing">料金について</option>
                    <option value="account">アカウントについて</option>
                    <option value="feature">機能リクエスト</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" >
                    お問い合わせ内容 <span >*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    
                    placeholder="お問い合わせ内容を詳しくご記入ください"
                  />
                </div>

                <div className="bg-gray-50">
                  <label >
                    <input
                      type="checkbox"
                      required
                      
                    />
                    <span >
                      <a href="/privacy" >プライバシーポリシー</a>
                      に同意します <span >*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 bg-blue-700"
                >
                  送信する
                </button>
              </form>

              <div className="bg-amber-50">
                <p >
                  <strong>注意：</strong> このフォームは現在デモ版です。実際の送信機能は実装されていません。
                  本番環境では、適切なバックエンド処理を実装する必要があります。
                </p>
              </div>
            </section>

            <section >
              <h2 >よくあるお問い合わせ</h2>
              <p >
                よくあるご質問については、
                <a href="/faq" >FAQ（よくある質問）</a>
                のページもご参照ください。
              </p>
            </section>

            <section >
              <h2 >投資に関するご相談について</h2>
              <div className="bg-red-50">
                <p >重要なお知らせ</p>
                <p >
                  当サービスは金融商品取引業者ではないため、個別の投資助言を行うことはできません。
                  投資に関する具体的なご相談は、証券会社等の金融商品取引業者にお問い合わせください。
                </p>
              </div>
            </section>

            <div className="bg-slate-100">
              <h3 >
                <Mail  />
                運営会社情報
              </h3>
              <p >
                <strong>会社名:</strong> 株式会社デジタルアド（DigitalAd Co., Ltd.）
              </p>
              <p >
                <strong>所在地:</strong> 〒163-0534 東京都新宿区西新宿1-6-1 新宿野村ビル21階
              </p>
              <p >
                <strong>設立:</strong> 2014年5月
              </p>
              <p >
                <strong>業種:</strong> デジタル広告／データ分析／広告運用最適化
              </p>
              <p >
                <strong>メールアドレス:</strong> support@ostosk.jp
              </p>
              <p >
                <strong>受付時間:</strong> 24時間受付（返信は営業日内）
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

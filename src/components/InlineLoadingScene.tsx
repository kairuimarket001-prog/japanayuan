import AstronautAnimation from './AstronautAnimation';
import RocketAnimation from './RocketAnimation';
import LoadingProgressBars from './LoadingProgressBars';

interface InlineLoadingSceneProps {
  isVisible: boolean;
}

export default function InlineLoadingScene({ isVisible }: InlineLoadingSceneProps) {
  if (!isVisible) return null;

  return (
    <div >
      <div >
        <h2 >
          AI正在分析報告
        </h2>
        <p >
          数秒お待ちください...
        </p>
      </div>

      <div >
        <AstronautAnimation />
        <RocketAnimation />
      </div>

      <div >
        <LoadingProgressBars isVisible={isVisible} />
      </div>

      <div >
        <p >
          すべてのデータは公開されている市場情報を使用しており、
          <br  />
          公開市場データに基づいて分析を行っています
        </p>
      </div>
    </div>
  );
}

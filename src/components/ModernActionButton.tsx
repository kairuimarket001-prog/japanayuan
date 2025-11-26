interface ModernActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ModernActionButton({ onClick, disabled = false }: ModernActionButtonProps) {
  return (
    <>
      <div  >
        <button
          onClick={onClick}
          disabled={disabled}
          
          
        >
          <span >診断を開始する</span>
        </button>
      </div>
      <div >
        <p >
          ※本診断は投資助言ではありません。投資判断は自己責任でお願いいたします。
        </p>
      </div>
    </>
  );
}

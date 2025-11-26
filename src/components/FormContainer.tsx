import { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <div >
      <div
        className="bg-white"
        
      >
        <div >
          <div >
            <h2 >
              早速始めましょう
            </h2>
            <p >
              銘柄コードまたは銘柄名を入力してください
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

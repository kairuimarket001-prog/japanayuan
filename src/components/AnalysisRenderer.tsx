import { ReactNode } from 'react';

interface AnalysisRendererProps {
  text: string;
}

interface AnalysisLine {
  type: 'bold' | 'normal';
  content: ReactNode[];
}

const parseNumber = (text: string): ReactNode[] => {
  const parts: ReactNode[] = [];
  const numberRegex = /(\d+\.?\d*%?|\d+円|[+-]\d+\.?\d*)/g;
  let lastIndex = 0;
  let match;

  while ((match = numberRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} >
        {match[0]}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};

const parseLine = (line: string): AnalysisLine => {
  const isBold = line.includes('###') || line.includes('**') || /^[\d]+\./.test(line);
  const cleanLine = line.replace(/###|\*\*/g, '');

  return {
    type: isBold ? 'bold' : 'normal',
    content: parseNumber(cleanLine)
  };
};

export default function AnalysisRenderer({ text }: AnalysisRendererProps) {
  const lines = text.split('\n');
  const parsedLines = lines.map(parseLine);

  return (
    <div >
      {parsedLines.map((line, index) => {
        if (line.type === 'bold') {
          return (
            <div key={index} >
              {line.content}
            </div>
          );
        }
        return (
          <div key={index} >
            {line.content}
          </div>
        );
      })}
    </div>
  );
}

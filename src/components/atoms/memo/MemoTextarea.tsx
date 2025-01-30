import { forwardRef, useRef, useState } from 'react';
import { MemoSize, SIZE_CONFIG } from './Memo';

const TEXTAREA_PADDING = 24;

// 메모 크기별 최대 텍스트 높이 설정
const MAX_TEXT_HEIGHT: Record<MemoSize, number> = {
  small: 51,
  medium: 56,
};
const HEIGHT_PADDING: Record<MemoSize, number> = {
  small: 2,
  medium: 1,
};

// 텍스트의 크기를 계산하기 위한 임시 span 요소 생성 함수
const createTempSpan = (
  context: HTMLTextAreaElement,
  newValue: string,
): HTMLSpanElement => {
  const tempSpan = document.createElement('span');
  tempSpan.style.visibility = 'hidden';
  tempSpan.style.position = 'absolute';
  tempSpan.style.whiteSpace = 'pre';
  tempSpan.style.font = window.getComputedStyle(context).font;
  tempSpan.textContent = newValue || ' ';
  document.body.appendChild(tempSpan);
  return tempSpan;
};

const calculateNewHeight = (
  calculatedWidth: number,
  textHeight: number,
  maxTextHeight: number,
  size: MemoSize,
): number => {
  const { maxWidth, minHeight, maxHeight } = SIZE_CONFIG[size];

  // 최대 너비를 초과하면 최대 높이 반환
  if (calculatedWidth >= maxWidth) {
    return maxHeight;
  }
  // 최대 높이를 초과하면 최대 높이를 제한
  if (textHeight >= maxTextHeight) {
    return Math.min(textHeight + HEIGHT_PADDING[size], maxHeight);
  }
  return minHeight;
};

type Dimensions = {
  width: number;
  height: number;
};

interface MemoTextareaProps {
  text: string;
  size: MemoSize;
  setMemoText: (text: string) => void;
  className?: string;
}

const MemoTextarea = forwardRef<HTMLTextAreaElement, MemoTextareaProps>(
  ({ text, size, setMemoText, className, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [dimensions, setDimensions] = useState<Dimensions>({
      width: SIZE_CONFIG[size].minWidth,
      height: SIZE_CONFIG[size].minHeight,
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      if (!textareaRef.current) {
        setMemoText(newValue);
        return;
      }

      const { minWidth, maxWidth } = SIZE_CONFIG[size];
      const context = textareaRef.current;

      // 임시 span 생성 및 너비 계산
      const tempSpan = createTempSpan(context, newValue);
      const calculatedWidth = Math.min(
        tempSpan.offsetWidth + TEXTAREA_PADDING,
        maxWidth,
      );
      document.body.removeChild(tempSpan);

      // 너비와 높이 계산
      const newWidth = Math.max(calculatedWidth, minWidth);
      const textHeight = context.scrollHeight || 0;
      const maxTextHeight = MAX_TEXT_HEIGHT[size];
      const newHeight = calculateNewHeight(
        calculatedWidth,
        textHeight,
        maxTextHeight,
        size,
      );

      // 너비와 높이 상태 업데이트
      setDimensions({ width: newWidth, height: newHeight });

      // 최대 너비와 최대 높이 보다 큰 영역을 차지하는 경우 반환 (텍스트 입력 불가)
      if (newWidth >= maxWidth && textHeight > maxTextHeight) {
        return;
      }
      if (textHeight > maxTextHeight) {
        return;
      }
      setMemoText(newValue);
    };

    return (
      <textarea
        ref={ref || textareaRef}
        value={text}
        onChange={handleChange}
        placeholder='메모...'
        className={`${className} resize-none overflow-hidden`}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          whiteSpace:
            dimensions.width >= SIZE_CONFIG[size].maxWidth
              ? 'pre-wrap'
              : 'nowrap',
        }}
        {...props}
      />
    );
  },
);

MemoTextarea.displayName = 'MemoTextarea';
export default MemoTextarea;

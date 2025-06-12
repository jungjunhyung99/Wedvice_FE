import useMemoContext from '@/contexts/memo/MemoContext';
import { Dimensions, MemoSize, SIZE_CONFIG } from '@/types/memo/memoTypes';
import { updateDimensions } from '@/utils/memo/memoUtils';
import {
  ChangeEvent,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

// 글자수 초과 시 렌더되는 alert 컴포넌트
const TextLimitAlert = (): JSX.Element => {
  return (
    <span className='block pt-5 text-center text-xs font-medium text-red-200'>
      글자 수를 초과하여 더 입력할 수 없습니다.
    </span>
  );
};

interface MemoTextareaProps {
  size: MemoSize;
  className?: string;
}

const MemoTextarea = forwardRef<HTMLTextAreaElement, MemoTextareaProps>(
  ({ size, className, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const { memoText, setMemoText } = useMemoContext();
    const [isMaxText, setIsMaxText] = useState(false);

    const { minWidth, minHeight, maxWidth } = SIZE_CONFIG[size];
    const [dimensions, setDimensions] = useState<Dimensions>({
      width: minWidth,
      height: minHeight,
    });

    useLayoutEffect(() => {
      if (!textareaRef.current) {
        return;
      }

      const context = textareaRef.current;
      const { width, height } = updateDimensions(context, memoText, size);
      setDimensions({ width, height });
    }, []);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value || '';
      const context = textareaRef.current;

      if (!context) {
        setMemoText(newValue);
        return;
      }

      const {
        width: newWidth,
        height: newHeight,
        textHeight,
        maxTextHeight,
      } = updateDimensions(context, newValue, size);

      // 너비와 높이 상태 업데이트
      setDimensions({ width: newWidth, height: newHeight });

      // 최대 너비와 최대 높이 보다 큰 영역을 차지하는 경우 반환 (텍스트 입력 불가)
      if (newWidth >= maxWidth && textHeight > maxTextHeight) {
        setIsMaxText(true);
        return;
      }
      if (textHeight > maxTextHeight) {
        return;
      }
      setMemoText(newValue);
      setIsMaxText(false);
    };

    return (
      <>
        <textarea
          ref={ref || textareaRef}
          value={memoText}
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
        {isMaxText && <TextLimitAlert />}
      </>
    );
  },
);

MemoTextarea.displayName = 'MemoTextarea';
export default MemoTextarea;

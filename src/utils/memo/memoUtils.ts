// 메모 기능에서 사용하는 util 함수들을 정의힙니다.

import {
  HEIGHT_PADDING,
  MAX_TEXT_HEIGHT,
  TEXTAREA_PADDING,
} from '@/constants/memo/memoConstants';
import {
  MemoSize,
  SIZE_CONFIG,
  UpdateDimensions,
} from '@/types/memo/memoTypes';

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

export const updateDimensions = (
  context: HTMLTextAreaElement,
  text: string,
  size: MemoSize,
): UpdateDimensions => {
  const { minWidth, maxWidth } = SIZE_CONFIG[size];

  const tempSpan = createTempSpan(context, text);
  const calculatedWidth = Math.min(
    tempSpan.offsetWidth + TEXTAREA_PADDING,
    maxWidth,
  );
  document.body.removeChild(tempSpan);

  const textHeight = context.scrollHeight || 0;
  const maxTextHeight = MAX_TEXT_HEIGHT[size];
  const newHeight = calculateNewHeight(
    calculatedWidth,
    textHeight,
    maxTextHeight,
    size,
  );

  return {
    width: Math.max(calculatedWidth, minWidth),
    height: newHeight,
    textHeight,
    maxTextHeight,
  };
};

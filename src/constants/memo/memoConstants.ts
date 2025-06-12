// 메모 기능에서 사용하는 상수들을 정의힙니다.

import { MemoSize } from '@/types/memo/memoTypes';

export const TEXTAREA_PADDING = 24;

// 메모 크기별 최대 텍스트 높이 설정
export const MAX_TEXT_HEIGHT: Record<MemoSize, number> = {
  small: 51,
  medium: 56,
};

export const HEIGHT_PADDING: Record<MemoSize, number> = {
  small: 2,
  medium: 1,
};

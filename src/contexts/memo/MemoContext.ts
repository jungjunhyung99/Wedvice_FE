import { createContext, useContext } from 'react';

interface MemoContextProps {
  memoText: string;
  setMemoText: (text: string) => void;
}

export const MemoContext = createContext<MemoContextProps | undefined>(
  undefined,
);

// MemoContext 사용을 위한 Hook
export const useMemoContext = () => {
  const context = useContext(MemoContext);
  if (!context) {
    throw new Error(
      'MemoContext를 사용할 수 없습니다. MemoProvider를 감싸주세요.',
    );
  }
  return context;
};

export default useMemoContext;

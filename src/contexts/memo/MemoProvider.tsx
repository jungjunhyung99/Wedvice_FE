'use client';

import { ReactNode, useState } from 'react';
import { MemoContext } from './MemoContext';

export const MemoProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  // TODO: 서버에서 memoText 받아오기 (현재는 기본값 '')
  const [memoText, setMemoText] = useState('');

  return (
    <MemoContext.Provider value={{ memoText, setMemoText }}>
      {children}
    </MemoContext.Provider>
  );
};

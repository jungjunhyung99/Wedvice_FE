'use client';

import { MemoContnet } from '@/components/molecules/MemoContent';
import { useSearchParams } from 'next/navigation';

export const Memo = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  const memoText = role === '예신' ? '예랑' : '예신';

  return (
    <div className='w-full overflow-hidden text-center'>
      <h1 className='mt-4 text-2xl font-semibold text-white'>
        <span className='text-primary-500'>{memoText}</span>님에게
        <br />
        메모를 남겨보세요.
      </h1>
      <p className='mt-4 text-sm font-medium text-gray-700'>
        메모는 24시간 동안 유지되어요.
      </p>
      <MemoContnet />
    </div>
  );
};

import Link from 'next/link';

import { Profile } from '@/components/atoms/profile/Profile';
import { Memo } from '@/features/memo/component/Memo';

export const MemoLink = () => {
  const username = 'test'; // dummy data

  return (
    <div className='flex flex-row items-center justify-center'>
      {/* TODO: 레이아웃 수정 필요 */}
      {['예신', '예랑'].map((role) => (
        <Link key={role} href={`/memo/${username}?role=${role}`}>
          <div className='flex flex-col items-center -space-y-1'>
            <Profile size='medium' />
            <Memo size='small' />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MemoLink;

import Link from 'next/link';

import { Memo } from '@/components/atoms/memo/Memo';
import { Profile } from '@/components/atoms/profile/Profile';
import { Navigation } from '@/components/molecules/navigation';

export const Home = () => {
  const username = 'test'; // dummy data

  return (
    <div className='relative flex h-full w-full flex-col'>
      <Navigation />
      {/* TODO: 레이아웃 수정 필요 */}
      <div className='flex flex-row items-center justify-center'>
        {['예신', '예랑'].map((role) => (
          <Link key={role} href={`/memo/${username}?role=${role}`}>
            <div className='flex flex-col items-center -space-y-1'>
              <Profile size='medium' />
              <Memo size='small' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

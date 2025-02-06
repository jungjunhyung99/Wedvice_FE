import { Memo } from '@/components/atoms/memo/Memo';
import { Profile } from '@/components/atoms/profile/Profile';

interface MemoContnetProps {
  // 서버로 부터 받아올 이미지
  imgUrl?: string;
}

export const MemoContnet = ({ imgUrl = '' }: MemoContnetProps) => {
  return (
    <div className='flex flex-col items-center -space-y-1 pt-[80px]'>
      <Profile size='large' />
      <Memo size='medium' isEditMode />
    </div>
  );
};

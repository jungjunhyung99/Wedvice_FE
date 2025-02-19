import { Memo } from '@/components/atoms/memo/Memo';
import SubmitButton from '@/components/atoms/memo/SubmitButton';
import { Profile } from '@/components/atoms/profile/Profile';

interface MemoContentProps {
  // 서버로 부터 받아올 이미지
  imgUrl?: string;
}

export const MemoContent = ({ imgUrl = '' }: MemoContentProps): JSX.Element => {
  return (
    <div className='flex flex-col items-center -space-y-1 pt-[80px]'>
      <Profile size='large' />
      <div className='flex h-full w-full flex-col items-center'>
        <Memo size='medium' isEditMode />
        <SubmitButton />
      </div>
    </div>
  );
};

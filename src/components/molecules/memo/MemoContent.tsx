import { Profile } from '@/components/atoms/profile/Profile';
import { Memo } from '@/features/memo/component/Memo';
import SubmitButton from '@/features/memo/component/SubmitButton';

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

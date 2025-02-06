import { Button } from '@/components/atoms/button';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface SubmitButtonProps {
  text?: string;
  setMemoText: Dispatch<SetStateAction<string>>;
}

// textarea 하위 버튼 컴포넌트
const SubmitButton = ({
  text,
  setMemoText,
}: SubmitButtonProps): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    setMemoText(text || '');
    // TODO : user 정보 받아오기
    router.push('/home/user1');
  };

  return (
    <Button
      onClick={handleClick}
      variant={text ? 'primary_fill' : 'gray_fill'}
      size='lg'
      width='register'
      className={`${!text && 'pointer-events-none'} absolute bottom-[34px]`}
    >
      메모 등록하기
    </Button>
  );
};

export default SubmitButton;

import { Button } from '@/components/atoms/button';
import useMemoContext from '@/contexts/memo/MemoContext';
import { useRouter } from 'next/navigation';

// textarea 하위 버튼 컴포넌트
const SubmitButton = (): JSX.Element => {
  const router = useRouter();
  const { memoText, setMemoText } = useMemoContext();

  const handleClick = () => {
    setMemoText(memoText || '');
    // TODO : user 정보 받아오기
    router.push('/home/user1');
  };

  return (
    <Button
      onClick={handleClick}
      variant={memoText ? 'primary_fill' : 'gray_fill'}
      size='lg'
      width='register'
      className={`${!memoText && 'pointer-events-none'} absolute bottom-[34px]`}
    >
      메모 등록하기
    </Button>
  );
};

export default SubmitButton;

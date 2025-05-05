import { Button } from '@/components/atoms/button';

const EmptyList = () => {
  return (
    <section className='flex h-[80dvh] w-full flex-col items-center justify-center gap-4'>
      <div className='flex w-auto flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center text-lg text-gray-500'>
          <span>리스트가 비어있어요</span>
          <span>리스트를 추가해보세요!</span>
        </div>
        <div className='flex w-full justify-center'>
          <Button>리스트 추가</Button>
        </div>
      </div>
    </section>
  );
};

export default EmptyList;

interface SubtasksTItleProps {
  title?: string;
  cost: number;
  isAllDone: boolean;
}

const SubtasksTitle = ({ title, cost, isAllDone }: SubtasksTItleProps) => {
  return (
    <div className='flex flex-col gap-3 text-white'>
      {isAllDone && (
        <h3 className='text-lg text-primary-500'>모두 완료했어요!</h3>
      )}
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='flex w-full justify-between text-lg'>
        <span className='gray-800 font-bold'>
          총 {cost.toLocaleString('ko-KR')} 원
        </span>
        <span className='cursor-pointer text-gray-600'>전체 금액 보기</span>
      </div>
    </div>
  );
};

export default SubtasksTitle;

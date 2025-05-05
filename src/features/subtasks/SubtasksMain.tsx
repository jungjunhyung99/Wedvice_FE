'use client';

import { useState } from 'react';
import { SubtasksMainProps } from '@/app/subtasks/page';
import { SubtaskCard } from './components/SubtasksCard';
import SubtasksTitle from './SubtasksTItle';
import { Modal } from '@/components/atoms/modal';
import EmptyList from './components/EmptyList';

const SubtasksMain = ({ tasks }: SubtasksMainProps) => {
  const [subtasks, setSubtasks] = useState(tasks);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleDelete = () => {
    const updated = [...subtasks];
    if (selectedIndex !== null) {
      updated.splice(selectedIndex, 1);
    }
    setSubtasks(updated);
    setIsOpen(false);
    setSelectedIndex(null);
  };

  const handleDeleteClick = (index: number) => {
    setIsOpen(true);
    setSelectedIndex(index);
  };

  const handleChange = (index: number) => {
    const updated = [...subtasks];
    updated[index].isDone = !updated[index].isDone;
    setSubtasks(updated);
  };

  if (!subtasks.length) return <EmptyList />;

  return (
    <div className='flex w-full flex-col gap-4'>
      <SubtasksTitle
        cost={tasks.reduce((acc, task) => acc + task.cost, 0)}
        title='스튜디오 촬영하기'
        isAllDone={tasks.every((task) => task.isDone)}
      />
      {subtasks.map((task, index) => (
        <SubtaskCard
          key={task.id}
          task={task}
          onDeleteAction={() => handleDeleteClick(index)}
          onChange={() => handleChange(index)}
        />
      ))}

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className='flex w-[320px] flex-col items-center justify-center'>
            <span className='text-lg text-white'>리스트를 삭제할까요?</span>

            <span className='pb-5 pt-3 text-sm text-gray-700'>
              리스트의 모든 항목이 삭제됩니다.
            </span>

            <div className='flex w-full justify-center gap-4'>
              <button
                className='h-[52px] w-[130px] rounded-md bg-gray-300 text-gray-800'
                onClick={() => setIsOpen(false)}
              >
                취소
              </button>
              <button
                className='h-[52px] w-[130px] rounded-md bg-red-200 text-white'
                onClick={handleDelete}
              >
                삭제
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SubtasksMain;

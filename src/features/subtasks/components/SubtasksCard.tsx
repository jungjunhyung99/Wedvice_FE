'use client';

import { useState } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { Card } from '@/components/molecules/card';
import { Chip } from '@/components/atoms/chip';
import clsx from 'clsx';
import TrashIcon from '@/assets/wed_icon/icon_28/trash_Icon.svg';

interface Task {
  id: string;
  isDone: boolean;
  title: string;
  cost: number;
  date: string;
  manager: string;
}

interface SubtaskCardProps {
  task: Task;
  onChange: () => void;
  onDeleteAction: () => void;
}

export const SubtaskCard = ({
  task,
  onChange,
  onDeleteAction,
}: SubtaskCardProps) => {
  const x = useMotionValue(0);
  const [isOpen, setIsOpen] = useState(false);
  const chipType =
    task.manager === '예랑'
      ? 'blue'
      : task.manager === '예신'
        ? 'pink'
        : 'primary300';

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className='relative z-0 flex w-[410px] items-center justify-center'>
      {isOpen && (
        <div
          className={clsx(
            task.isDone && 'opacity-1',
            'absolute bottom-0 right-2 top-5 z-0 flex h-11 w-11 items-center justify-center rounded-full bg-red-100',
          )}
        >
          <button
            onClick={onDeleteAction}
            className='font-bold text-white transition-transform hover:scale-105'
          >
            <TrashIcon />
          </button>
        </div>
      )}

      <motion.div
        className='relative z-10 w-full'
        drag='x'
        dragConstraints={{ left: -80, right: 0 }}
        style={{ x }}
        onDragEnd={handleDragEnd}
        animate={{ x: isOpen ? -80 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Card checked={task.isDone}>
          <Card.Checkbox checked={task.isDone} onChange={onChange} />
          <Card.TaskTitle>{task.title}</Card.TaskTitle>
          <Card.CostSpan>{task.cost} 원</Card.CostSpan>
          <Chip rounded='sm' size='sm'>
            {task.date}
          </Chip>
          <Chip type={chipType} rounded='sm' size='sm'>
            {task.manager}
          </Chip>
        </Card>
      </motion.div>
    </div>
  );
};

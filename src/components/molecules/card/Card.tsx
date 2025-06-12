'use client';

import { ChangeEventHandler, Children, ReactNode, isValidElement } from 'react';

interface CardMainProps {
  children: ReactNode;
  checked: boolean;
}

interface SubComponentProps {
  children?: ReactNode;
}

interface CheckBoxProps {
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TaskTitle = ({ children }: SubComponentProps) => {
  return <span className='text-lg'>{children}</span>;
};

const CostSpan = ({ children }: SubComponentProps) => {
  return <span className='text-base text-gray-700'>{children}</span>;
};

const Checkbox = ({ onChange, checked }: CheckBoxProps) => {
  return (
    <label htmlFor='formCheckAll'>
      <input
        id='formCheckAll'
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className="h-[24px] w-[24px] appearance-none rounded-sm bg-gray-300 bg-[url('/check.png')] bg-center bg-no-repeat checked:bg-primary-400"
      />
    </label>
  );
};

const TaskTitleTypes = (<TaskTitle />).type;
const CostSpanTypes = (<CostSpan />).type;
const CheckboxTypes = (<Checkbox checked={false} onChange={() => {}} />).type;

const getTaskTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === TaskTitleTypes,
  );
};

const getCostSpan = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === CostSpanTypes,
  );
};

const getChip = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter((child) => {
    if (isValidElement(child)) {
      const componentType = child.type as any;
      return componentType.displayName === 'Chip';
    }
    return false;
  });
};

const getCheckbox = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === CheckboxTypes,
  );
};

function CardMain({ children, checked }: CardMainProps) {
  const taskTitle = getTaskTitle(children);
  const costSpan = getCostSpan(children);
  const chips = getChip(children);
  const checkbox = getCheckbox(children);

  const hasCheckbox = checkbox.length;
  const hasTwoCheckbox = checkbox.length === 2;
  const hasCostSpan = costSpan.length;

  return (
    <div
      className={`flex w-full flex-col justify-between rounded-[16px] bg-gray-100 px-[20px] py-[16px] text-white ${checked ? 'opacity-40' : ''}`}
    >
      <div className='flex gap-[12px]'>
        {checkbox}
        {taskTitle}
        {!hasCostSpan && !hasCheckbox && (
          <div className='h-[26px] gap-[8px]'>{chips}</div>
        )}
      </div>
      <div
        className={`flex ${hasCostSpan ? 'justify-between' : 'justify-end'} ${hasCheckbox && 'pl-[36px]'}`}
      >
        {costSpan}
        {(hasCostSpan || hasTwoCheckbox) && (
          <div className='flex h-[26px] items-center gap-[8px]'>{chips}</div>
        )}
      </div>
    </div>
  );
}

export const Card = Object.assign(CardMain, {
  TaskTitle,
  CostSpan,
  Checkbox,
});

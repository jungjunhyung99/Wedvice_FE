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
  return <span className="text-[18px]">{children}</span>;
};

const CostSpan = ({ children }: SubComponentProps) => {
  return <span className="text-gray-700 text-[16px]">{children}</span>;
};

const Checkbox = ({ onChange, checked }: CheckBoxProps) => {
  return (
    <label htmlFor="formCheckAll">
      <input
        id="formCheckAll"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[24px] h-[24px] rounded-sm bg-gray-300 checked:bg-primary-400 appearance-none bg-[url('/check.png')] bg-no-repeat bg-center"
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

  return (
    <div
      className={`flex flex-col justify-between w-[350px] py-[16px] px-[20px] rounded-[16px] bg-gray-100 text-white ${checked ? 'opacity-40' : ''}`}
    >
      <div className={'flex gap-[12px]'}>
        {checkbox}
        {taskTitle}
        {!costSpan.length && !checkbox.length && <div className="h-[26px] gap-[8px]">{chips}</div>}
      </div>
      <div className={`flex ${costSpan.length ? 'justify-between' : 'justify-end'}  ${checkbox.length ? 'pl-[36px]' : ''}`}>
        {costSpan}
        {(costSpan.length || chips.length === 2) && <div className="flex items-center h-[26px] gap-[8px]">{chips}</div>}
      </div>
    </div>
  );
}

export const Card = Object.assign(CardMain, {
  TaskTitle,
  CostSpan,
  Checkbox,
});

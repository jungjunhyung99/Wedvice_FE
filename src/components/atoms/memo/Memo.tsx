'use client';

import useMemoContext from '@/contexts/memo/MemoContext';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import MemoDiv from './MemoDiv';
import MemoTextarea from './MemoTextarea';
import SubmitButton from './SubmitButton';

export const memoVariants = cva(
  'inline-flex items-center box-border text-center py-2 px-3 rounded-md leading-tight font-medium break-words border-[1px] border-white/20 bg-white/20 focus:outline-none focus:ring-0',
  {
    variants: {
      variant: {
        main: 'text-white',
        none: 'text-gray-700 placeholder-gray-700',
      },
      size: {
        small:
          'text-[14px] max-w-[155px] max-h-[52px] min-w-[58px] min-h-[34px]',
        medium:
          'text-[16px] max-w-[173px] max-h-[58px] min-w-[63px] min-h-[37px]',
      },
    },
    defaultVariants: {
      variant: 'main',
      size: 'small',
    },
  },
);

type SizeConfigItem = {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
};

export type MemoSize = 'small' | 'medium';

export const SIZE_CONFIG: Record<MemoSize, SizeConfigItem> = {
  small: { minWidth: 58, maxWidth: 155, minHeight: 34, maxHeight: 52 },
  medium: { minWidth: 63, maxWidth: 173, minHeight: 37, maxHeight: 58 },
};

interface MemoProps {
  isEditMode?: boolean;
  text?: string;
  size?: MemoSize;
}

export const Memo = forwardRef<HTMLDivElement, MemoProps>(
  ({ isEditMode = false, text = '', size = 'medium', ...props }, ref) => {
    const { memoText } = useMemoContext();

    const commonClass = memoVariants({
      variant: memoText.trim() ? 'main' : 'none',
      size,
    });

    return isEditMode ? (
      <div className='flex h-full w-full flex-col items-center'>
        <MemoTextarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          text={memoText}
          size={size}
          className={commonClass}
          {...props}
        />
        <SubmitButton />
      </div>
    ) : (
      <MemoDiv
        ref={ref as React.Ref<HTMLDivElement>}
        text={memoText}
        size={size}
        className={commonClass}
        {...props}
      />
    );
  },
);

Memo.displayName = 'Memo';
export default Memo;

import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const chipVariants = cva(
  'flex flex-wrap w-full justify-center items-center rounded-md text-[14px] h-[26px] px-[8px] py-[4px]',
  {
    variants: {
      type: {
        wedding:
          'bg-gray-200 text-white rounded-md p-[8px] text-[16px] h-[38px]',
        alarm:
          'text-gray-900 rounded-xl rounded-tl-none bg-gray-200 text-gray-900 h-[42px]',
        primary300: 'bg-primary-300 text-white',
        pink100: 'bg-pink-100 text-white',
        teal100: 'bg-teal-100 text-white',
        blue100: 'bg-blue-100 text-white',
        yellow100: 'bg-yellow-100 text-white',
        gray100: 'bg-gray-200 text-gray-800',
        red100: 'bg-red-100 text-red-200',
      },
    },
    defaultVariants: {
      type: 'wedding',
    },
  },
);

interface ChipProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className={chipVariants({ type, className })} ref={ref} {...props} />
    );
  },
);
Chip.displayName = 'Chip';

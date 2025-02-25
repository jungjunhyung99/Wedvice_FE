import LeftArrow from '@/assets/left_arrow_28.svg';
import { forwardRef, ReactNode } from 'react';

interface TopBarProps {
  text?: string;
  className?: string;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
}

const TopBar = forwardRef<HTMLDivElement, TopBarProps>(
  ({ text, primaryButton, secondaryButton, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className} relative flex h-[53px] items-center px-5 text-center`}
        {...props}
      >
        <div className='flex h-9 w-9 items-center justify-center'>
          <LeftArrow />
        </div>
        {text && (
          <span className='absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-800'>
            {text}
          </span>
        )}
        <div className='ml-auto flex items-center space-x-4'>
          {primaryButton}
          {secondaryButton}
        </div>
      </div>
    );
  },
);

TopBar.displayName = 'TopBar';
export default TopBar;

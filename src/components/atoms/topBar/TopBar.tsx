import LeftArrow from '@/assets/left_arrow_28.svg';
import { forwardRef, ReactNode } from 'react';

// TobBar의 뒤로가기 버튼
const BackButton = (): JSX.Element => {
  return (
    <div className='absolute flex h-9 w-9 items-center justify-center'>
      <LeftArrow />
    </div>
  );
};

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
        <BackButton />
        {text && (
          <span className='mx-auto text-lg font-semibold text-gray-800'>
            {text}
          </span>
        )}
        <div className='flex items-center space-x-4'>
          {primaryButton}
          {secondaryButton}
        </div>
      </div>
    );
  },
);

TopBar.displayName = 'TopBar';
export default TopBar;

'use client';

import LeftArrow from '@/assets/left_arrow_28.svg';
import { useRouter } from 'next/navigation';
import { forwardRef, ReactNode } from 'react';

interface TopBarProps {
  title?: string;
  className?: string;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const TopBar = forwardRef<HTMLDivElement, TopBarProps>(
  (
    {
      title,
      primaryButton,
      secondaryButton,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      className,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();

    const handleBack = () => {
      router.back();
    };

    return (
      <div
        ref={ref}
        className={`${className} relative flex h-[53px] items-center px-5 text-center`}
        {...props}
      >
        {/* 뒤로가기 버튼 */}
        <div
          className='flex h-9 w-9 cursor-pointer items-center justify-center'
          onClick={handleBack}
        >
          <LeftArrow />
        </div>
        {/* 타이틀 */}
        {title && (
          <span className='absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 select-none text-lg font-semibold text-gray-800'>
            {title}
          </span>
        )}
        {/* 우측 버튼 그룹 */}
        {primaryButton && (
          <div className='ml-auto flex items-center space-x-4'>
            {secondaryButton && (
              <div className='cursor-pointer' onClick={onSecondaryButtonClick}>
                {secondaryButton}
              </div>
            )}
            <div className='cursor-pointer' onClick={onPrimaryButtonClick}>
              {primaryButton}
            </div>
          </div>
        )}
      </div>
    );
  },
);

TopBar.displayName = 'TopBar';
export default TopBar;

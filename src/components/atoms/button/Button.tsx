import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'inline-flex gap-2 items-center justify-center word-break:keep-all disabled:pointer-events-none disabled:opacity-30 transition-colors duration-200 font-medium text-[20px]',
  {
    variants: {
      variant: {
        primary_fill: 'bg-primary-400 text-white',
        gray_fill: 'bg-gray-200 text-gray-800',
      },
      rounded: {
        lg: 'rounded-lg',
        md: 'rounded-md',
      },
      width: {
        full: 'w-full',
        register: 'w-[350px]',
      },
      height: {
        lg: 'h-[63px]',
        md: 'h-[53px]',
        sm: 'h-[34px]',
      },
      size: {
        lg: 'px-[32px] py-[20px]',
        md: 'px-[24px] py-[16px]',
        sm: 'px-[16px] py-[8px]',
      },
    },
    defaultVariants: {
      variant: 'primary_fill',
      rounded: 'lg',
      width: 'full',
      size: 'md',
      height: 'lg',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, width, size, height, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({
          variant,
          rounded,
          width,
          size,
          height,
          className,
        })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

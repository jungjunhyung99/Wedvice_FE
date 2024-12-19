import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const memoVariants = cva(
  "inline-flex items-center py-2 px-3 rounded-md font-medium break-words border-[1px] border-white/20",
  {
    variants: {
      variant: {
        main: "bg-white/20 text-white",
        none: "text-gray-700",
      },
      size: {
        small: 'text-[14px] max-w-[152px] max-h-[52px]',
        medium: 'text-[16px] max-w-[173px] max-h-[58px]',
      },
    },
    defaultVariants: {
      variant: "main",
      size: "small",
    },
  }
);

interface MemoProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof memoVariants> {}

export const Memo = forwardRef<HTMLDivElement, MemoProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const isDefaultText = children === null;
    const text = isDefaultText ? '메모...' : String(children).slice(0, 22);

    return (
        <div
            className={memoVariants({
                variant: isDefaultText ? "none" : variant,
                size,
                className,
            })}
            ref={ref}
            {...props}
        >
            {text}
        </div>
    );
  }
);
Memo.displayName = "Memo";

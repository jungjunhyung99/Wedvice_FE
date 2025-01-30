import { forwardRef } from "react";
import { MemoSize } from "./Memo";

interface MemoDivProps {
    text: string;
    size: MemoSize;
    className?: string;
}

const MemoDiv = forwardRef<HTMLDivElement, MemoDivProps>(
({ text, size, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={className}
            {...props}
        >
            <span>
                {text || "메모..."}
            </span>
        </div>
    );
}
);

MemoDiv.displayName = "MemoDiv";
export default MemoDiv;
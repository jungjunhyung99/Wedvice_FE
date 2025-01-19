"use client";

import { useSearchParams } from "next/navigation";
import { MemoContnet } from "@/components/molecules/MemoContent";

export const Memo = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role');

    const memoText = role === '예신' ? '예랑' : '예신';

    return (
        <div className="w-full text-center overflow-hidden">
            <h1 className="mt-4 text-white text-2xl font-semibold">
                <span className="text-primary-500">{memoText}</span>님에게<br />메모를 남겨보세요.
            </h1>
            <p className="mt-4 text-gray-700 text-sm font-medium">
                메모는 24시간 동안 유지되어요.
            </p>
            <MemoContnet />
        </div>
    );
}

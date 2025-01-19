import { Profile } from '@/components/atoms/profile/Profile';
import { Memo } from '@/components/atoms/memo/Memo';

interface MemoContnetProps {
    // 서버로 부터 받아올 이미지
    imgUrl?: string;
}

export const MemoContnet = ({ imgUrl = '' }: MemoContnetProps) => {
    return (
        <div className="mt-[72px] flex flex-col items-center -space-y-1">
            <Profile size="large"/>
            <Memo size="medium" isEditMode/>
        </div>
    );
};

import type { FC } from "react";

interface MentorCardProps {
    title: string;
    name: string;
}

const MentorCard: FC = () => {
    return (
        <div className="aspect-square bg-gray-200 rounded-sm hover:bg-gray-300 transition-colors cursor-pointer flex items-center justify-center">
            {/* 나중에 이미지가 들어갈 공간 */}
            <span className="text-gray-400 text-xs font-bold">Mentor Card</span>
        </div>
    );
};

const MentorGrid: FC = () => {
    // 임시 데이터 12개
    const mentors = Array.from({ length: 12 }).map((_, i) => i);

    return (
        <div className="grid grid-cols-3 gap-2">
            {mentors.map((id) => (
                <MentorCard key={id} />
            ))}
        </div>
    );
};

export default MentorGrid;

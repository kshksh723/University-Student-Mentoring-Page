import { useState, type FC } from "react";
import MentorGrid from "./MentorGrid";

// 1. 타입 정의 (첫 글자 대문자 권장)
export type CategoryType = "전체" | "취업/진로" | "전공 학습" | "자격증/어학" | "대외활동" | "멘탈 케어";

export const CATEGORIES: CategoryType[] = ["전체", "취업/진로", "전공 학습", "자격증/어학", "대외활동", "멘탈 케어"];

const MentorView: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>("전체");

    return (
        <div className="mt-8 px-2 max-w-full mx-auto pb-20">
            {/* 상단 헤더 영역 */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-black text-black tracking-tighter">
                    MENTO/LIST
                </h1>
                <button className="bg-gray-300 hover:bg-gray-400 text-black px-12 py-2 rounded-full text-xl font-bold transition-all cursor-pointer">
                    멘토 등록하기
                </button>
            </div>
            <div className="flex items-stretch gap-4">
                {/* 1. 좌측 사이드바: 카테고리 (높이 자동 확장) */}
                <div className="w-32 bg-blue-200 rounded-sm overflow-hidden flex flex-col">
                    <ul className="flex flex-col flex-1">
                        {CATEGORIES.map((category) => (
                            <li
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`
                                    cursor-pointer px-4 py-8 text-center text-sm font-bold transition-all border-b border-blue-300
                                    ${selectedCategory === category
                                        ? "bg-blue-300 text-black"
                                        : "text-gray-700 hover:bg-blue-300/50"}
                                `}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. 중앙 메인 영역: AI'S PICKS & MentorGrid */}
                <div className="flex-1 flex flex-col gap-2">
                    {/* AI'S PICKS 섹션: 고정 높이 대신 최소 높이와 정렬 사용 */}
                    <div className="bg-gray-200 rounded-sm p-12 relative min-h-[450px] flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-black mb-12">AI'S PICKS</h2>

                        <div className="flex items-center gap-12 ml-6">
                            {/* Profile Circle */}
                            <div className="w-40 h-40 rounded-full border border-black bg-gray-300 flex items-center justify-center text-sm text-black font-bold shrink-0">
                                Profile
                            </div>

                            {/* Text Info: 고정 높이 제거 */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-4xl font-bold text-black leading-tight">멘토링 제목</h3>
                                <p className="text-4xl font-bold text-black">이름</p>
                            </div>
                        </div>

                        {/* 상담 신청 하기 버튼 (하단 중앙 우측) */}
                        <div className="absolute bottom-8 right-8">
                            <button className="bg-[#B6D1B3] hover:bg-[#A5C1A2] text-black px-12 py-3 rounded-sm text-lg font-bold transition-all cursor-pointer">
                                상담 신청 하기
                            </button>
                        </div>

                    </div>


                </div>
                {/* 3. 우측 사이드바: 해시 태그 순위 (부모 높이에 맞춰 자동 확장) */}
                <div className="w-40 bg-gray-200 rounded-sm p-8 flex items-center justify-center shrink-0">
                    <h2 className="text-3xl font-bold text-black text-center leading-relaxed">
                        해시 태그 순위
                    </h2>
                </div>
            </div>
            {/* MentorGrid 영역 간격 조절 */}
            <div className="mt-10">
                <MentorGrid />
            </div>


        </div>
    );
};

export default MentorView;

import type { FC } from "react";

/**
 * [1단계] 기본 레이아웃 잡기
 * - grid: 화면을 격자 모양으로 나눕니다.
 * - grid-cols-1: 모바일에서는 1줄로 보여줍니다.
 * - lg:grid-cols-4: 큰 화면(데스크탑)에서는 4개의 열로 나눕니다.
 */
const MentorView: FC = () => {
    return (
        <div className="mt-14">
            {/* 제목 영역 */}
            <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-8">
                MENTO/LIST
            </h1>

            {/* 콘텐츠 영역 (3단 그리드 사용) */}
            {/* lg:grid-cols-3 로 설정하여 큰 화면에서 딱 3줄이 나오게 합니다. */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* [1번 그리드] 카테고리 필터 영역 */}
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 min-h-[200px] flex flex-col items-center justify-center">
                    <p className="text-gray-400 font-bold mb-2">1. 카테고리</p>
                    <span className="text-xs text-gray-300">(필터 버튼들이 들어갈 곳)</span>
                </div>

                {/* [2번 그리드] 메인 멘토 목록 영역 */}
                <div className="bg-white p-6 rounded-3xl border border-dashed border-gray-200 min-h-[400px] flex flex-col items-center justify-center">
                    <p className="text-gray-400 font-bold mb-2">2. 멘토 목록</p>
                    <span className="text-xs text-gray-300">(멘토 카드들이 나열될 곳)</span>
                </div>

                {/* [3번 그리드] 우측 추가 정보/추천 영역 */}
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 min-h-[200px] flex flex-col items-center justify-center">
                    <p className="text-gray-400 font-bold mb-2">3. 추천 및 정보</p>
                    <span className="text-xs text-gray-300">(인기 멘토나 공지사항 등)</span>
                </div>

            </div>
        </div>
    );
};

export default MentorView;
import { useState, type FC } from "react";

/**
 * 전역 검색창 컴포넌트
 * 멘토 이름, 강의명 등 카테고리별 검색 기능을 제공합니다.
 */
const SearchBar: FC = () => {
    // 드롭다운 열림 상태 관리
    const [isOpen, setIsOpen] = useState(false);
    // 선택된 카테고리 상태 관리
    const [selectedCategory, setSelectedCategory] = useState("전체");

    // 검색 카테고리 목록
    const categories = ["전체", "멘토이름", "강의명", "카테고리"];

    return (
        <form className="max-w-2xl mx-auto mt-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex shadow-sm rounded-xl relative group">
                <label htmlFor="search-dropdown" className="sr-only">
                    검색 카테고리 선택
                </label>

                {/* 카테고리 선택 버튼 */}
                <button
                    id="dropdown-button"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center shrink-0 z-10 text-ensue-dark bg-gray-50 border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-ensue-blue/10 font-medium rounded-s-xl text-sm px-5 py-3 text-center transition-all duration-200"
                >
                    <span className="min-w-16">{selectedCategory}</span>
                    <svg
                        className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>

                {/* 드롭다운 메뉴 */}
                {isOpen && (
                    <>
                        {/* 배경 클릭 시 닫기 위한 오버레이 */}
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsOpen(false)}
                        ></div>
                        <div
                            id="dropdown"
                            className="absolute top-14 left-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-44 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200"
                        >
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                                {categories.map((category) => (
                                    <li key={category}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setIsOpen(false);
                                            }}
                                            className={`inline-flex w-full px-4 py-2.5 hover:bg-gray-50 transition-colors ${selectedCategory === category ? "text-ensue-blue font-bold bg-gray-50" : ""
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}

                {/* 검색 입력창 영역 */}
                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-3 w-full z-20 text-sm text-ensue-dark bg-white rounded-e-xl border-s-0 border border-gray-200 focus:ring-2 focus:ring-ensue-blue focus:border-ensue-blue outline-none transition-all placeholder:text-gray-400"
                        placeholder={`${selectedCategory === "전체" ? "멘토 또는 강의" : selectedCategory}를 검색하세요`}
                        required
                    />
                    <button
                        type="submit"
                        className="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-ensue-blue rounded-e-xl border border-ensue-blue hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-ensue-blue/30 transition-all duration-200 flex items-center justify-center px-6"
                    >
                        <svg
                            className="w-4 h-4 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span>검색</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
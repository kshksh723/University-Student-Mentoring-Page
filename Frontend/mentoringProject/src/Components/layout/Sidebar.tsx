import type { FC } from "react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onToggle: () => void;
}


const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, onToggle }) => {
    const categories = [
        { name: "IT공과대학", icon: "💻" },
        { name: "경영대학", icon: "📊" },
        { name: "인문대학", icon: "📚" },
        { name: "예술대학", icon: "🎨" },
        { name: "사회과학대학", icon: "🏛️" },
        { name: "자연과학대학", icon: "🔬" },
        { name: "법학전문대학원", icon: "⚖️" },
        { name: "의학전문대학원", icon: "🏥" },
        { name: "약학대학", icon: "💊" },
        { name: "치학전문대학원", icon: "🦷" },
        { name: "한의학전문대학원", icon: "🌿" },
        { name: "수의학전문대학원", icon: "🐾" },
        { name: "교육대학원", icon: "🎓" },
        { name: "대학원", icon: "🏫" },
        { name: "기타", icon: "🏢" },
    ];

    return (
        <>


            {/* 모바일 배경 오버레이 */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-20 w-72 bg-white h-screen border-r border-gray-100 p-6 flex flex-col gap-8 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-5rem)] ${isOpen ? "translate-x-0 shadowed-lg" : "-translate-x-full"
                    }`}
            >
                {/* 모바일 토글 버튼 (사이드바에 부착) */}
                <button
                    onClick={onToggle}
                    className={`absolute top-24 left-full ml-4 p-2.5 rounded-xl bg-white shadow-lg border border-gray-100 text-gray-500 hover:text-ensue-blue transition-all lg:hidden z-50 ${isOpen ? "opacity-0 invisible" : "opacity-100 visible"
                        }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">단과대학 필터</h3>
                        <button onClick={onToggle} className="lg:hidden text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-2 overflow-y-auto h-[calc(100vh-20rem)] lg:h-[calc(80vh-15rem)] pr-2">
                        {categories.map((cat) => (
                            <li key={cat.name}>
                                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50 text-gray-600 hover:text-ensue-blue font-semibold transition-all group">
                                    <span className="text-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                                    <span className="text-sm">{cat.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto bg-linear-to-br from-ensue-blue to-blue-600 p-5 rounded-3xl text-white shadow-xl shadow-ensue-blue/20">
                    <p className="text-xs font-bold opacity-80 mb-1">AI 매칭</p>
                    <h4 className="text-lg font-bold leading-tight mb-3">나에게 딱 맞는<br />멘토를 찾아보세요!</h4>
                    <button className="w-full bg-white text-ensue-blue py-2.5 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-all">
                        AI 추천 시작하기
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

import type { FC } from "react";

const Sidebar: FC = () => {
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
        <aside className="w-72 bg-white h-[calc(100vh-5rem)] border-r border-gray-100 p-6 hidden lg:flex flex-col gap-8">
            <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">단과대학 필터</h3>
                <ul className="flex flex-col gap-2 overflow-y-auto h-[calc(80vh-15rem)]">
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
    );
};

export default Sidebar;

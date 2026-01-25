import type { FC } from "react";

const Main: FC = () => {
    return (
        <main className="flex-1 p-8">
            <div className="bg-white rounded-[40px] p-10 min-h-[600px] border border-gray-100 shadow-sm">
                <h2 className="text-4xl font-black text-ensue-dark mb-4">
                    Hello, <span className="text-ensue-blue">Ensue</span>!
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                    단과대학별 특화된 매칭 인터페이스를 제공하는 AI 멘토링 서비스입니다.
                    체계적인 활동 이력 관리와 지능형 추천 가이드를 경험해보세요.
                </p>
            </div>
        </main>
    );
};

export default Main;

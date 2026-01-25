import type { FC } from "react";
import logo from "../../assets/logo.png";
const Header: FC = () => {
    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 flex">
                        <img src={logo} alt="logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-ensue-dark tracking-tighter leading-none">ENSUE</h1>
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1">
                            Connecting Minds, Building Futures
                        </p>
                    </div>
                </div>
            </div>

            <nav className="flex items-center gap-6">
                <a href="#" className="text-sm font-semibold text-gray-600 hover:text-ensue-blue transition-colors">멘토 찾기</a>
                <a href="#" className="text-sm font-semibold text-gray-600 hover:text-ensue-blue transition-colors">활동 일지</a>
                <button className="bg-ensue-blue text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-ensue-blue/30 transition-all">
                    로그인
                </button>
            </nav>
        </header>
    );
};

export default Header;
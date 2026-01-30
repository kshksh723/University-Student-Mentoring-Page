import logo from "../../assets/logo.png";

export default function Header() {
    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-100">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 flex">
                        <img src={logo} alt="logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-ensue-dark tracking-tighter leading-none">ENSUE</h1>
                        <p className=" xs:block text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1">
                            Connecting Minds, Building Futures
                        </p>
                    </div>
                </div>
            </div>

            <nav className="flex items-center gap-3 sm:gap-4">
                <a href="#" className="text-[11px] sm:text-sm font-semibold text-gray-600 hover:text-ensue-blue transition-colors whitespace-nowrap">멘토 찾기</a>
                <a href="#" className="text-[11px] sm:text-sm font-semibold text-gray-600 hover:text-ensue-blue transition-colors whitespace-nowrap">활동 일지</a>
                <button className="cursor-pointer bg-ensue-blue text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-bold hover:shadow-lg hover:shadow-ensue-blue/30 transition-all shrink-0 whitespace-nowrap">
                    로그인
                </button>
            </nav>
        </header>
    );
}
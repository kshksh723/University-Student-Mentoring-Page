import type { FC } from "react";
import SearchBar from "../common/SearchBar";

const Main: FC = () => {
    return (
        <main className="flex-1 p-8">
            <div className="bg-white rounded-[40px] p-10 min-h-[600px] border border-gray-100 shadow-sm">
                <SearchBar />


            </div>
        </main>
    );
};

export default Main;

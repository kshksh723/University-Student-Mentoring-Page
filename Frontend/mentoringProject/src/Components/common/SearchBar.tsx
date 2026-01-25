import type { FC } from "react";

const SearchBar: FC = () => {
    return (
        <div>
            <input type="text" placeholder="Search" />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
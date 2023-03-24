import React, { FC } from "react";

import "./Search.scss";

export interface SearchProps {
  placeholder?: string;
}

const Search: FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className="search">
      <input type="search" placeholder={placeholder} />
      <img src="icons/search.svg" alt="search" />
    </div>
  );
};

export default Search;

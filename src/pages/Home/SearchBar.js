import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="searchBar common-flex">
            <input type="text" placeholder='가고싶은 해외 여행지를 입력하세요.' className="common-searchBar"></input>
            <button className="common-searchBar">검색</button>
        </div>
    )
}

export default SearchBar;
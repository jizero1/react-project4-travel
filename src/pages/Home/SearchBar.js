import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../contexts/SearchContext';
import './SearchBar.css';

function SearchBar() {
    const { inputText, setInputText } = useSearch();
    // const [inputText, setInputText] = useState('');
    const navigate = useNavigate();

    const searchBtnClick = () => {
        if (inputText.trim() === '') {
            alert("아무것도 입력하지 않았어요.");
        }
        else {
            navigate('/travel');
            console.log(inputText);
            // navigate(`/travel?search=$`)
        }
    }
    return (
        <div className="searchBar common-flex">
            <input type="text" placeholder='가고싶은 해외 여행지를 입력하세요.' value={inputText} onChange={(e) => setInputText(e.target.value)} className="common-searchBar"></input>
            <button className="searchBtn common-searchBar" onClick={searchBtnClick}>검색</button>
        </div>
    )
}

export default SearchBar;
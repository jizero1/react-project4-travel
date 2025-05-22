import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../contexts/SearchContext';
import './SearchBar.css';

function SearchBar() {
    const { inputText, setInputText } = useSearch();

    const navigate = useNavigate();


    // 검색 버튼 클릭했을때 input란이 공백이라면 페이지 이동 없이 alert창만 띄운다.
    const searchBtnClick = () => {
        if (inputText.trim() === '') {
            alert("아무것도 입력하지 않았어요.");
        }
        else {
            navigate('/travel');
        }
    }

    // 추천여행지 클릭시, 해당 여행지를 inputText에 저장하고, navigate('/travel')로 이동한다.
    const travelPick = (pickName) => {
        setInputText(pickName);
        navigate('/travel');
    }
    // 마우스로 클릭할때 말고 엔터 눌렀을때에도 searchBtnClick()을 호출하여 페이지 이동이 되도록 한다.
    const searchEnter = (e) => {
        if (e.key === 'Enter') {
            searchBtnClick();
        }
    }

    // '해외여행지 전체보기'버튼 클릭시 /travel페이지로 이동함.
    const travelAllView = () => {
        navigate('/travel');
    }
    return (
        <div className="searchBar common-flex">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input type="text" placeholder='가고싶은 해외 여행지를 입력하세요.' value={inputText}
                    onChange={(e) => setInputText(e.target.value.trim())}
                    onKeyDown={searchEnter}
                    className="searchBar-input common-searchBar"></input>
                <button className="searchBtn common-searchBar"
                    onClick={searchBtnClick}>검색</button>
            </div>
            <div className="searchBar-travelAll-container common-flex">
                <div className="searchBar-travelPick">
                    <p className="travelPick-title">추천 검색어</p>
                    <div className="searchBar-travelPickName">
                        <p onClick={() => travelPick('다낭')}>다낭</p>
                        <p onClick={() => travelPick('후쿠오카')}>후쿠오카</p>
                        <p onClick={() => travelPick('로마')}>로마</p>
                    </div>
                </div>
                <p className="searchBar-travelAll common-flex"
                    onClick={() => { setInputText(''); travelAllView(); }}>해외여행지 전체보기</p>
            </div>
        </div>
    )
}

export default SearchBar;
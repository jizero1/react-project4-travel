import React, { useState } from 'react';
import './TravelFilter.css';
import { MdFilterList, MdFilterListAlt } from "react-icons/md";

function TravelFilter({filterClick, filterBtnClick}) {

    const [isListClick, setIsListClick] = useState(false);
    const listClick = () => {
        setIsListClick(!isListClick);
    }
    return (
        <div className="travelFilter">
            {/* 추천순, 난이도순, 물가저렴한 순 */}
            
            <div className="filterBtn common-flex" onClick={() => listClick()}><MdFilterList />추천순</div>
            <div className="filterHiddenBox" style={{display: isListClick ? 'block' : 'none'}}>
                <ul>
                    <li onClick={() => {filterBtnClick(0); listClick();}}>추천순</li>
                    <li onClick={() => {filterBtnClick(1); listClick();}}>여행 난이도순</li>
                    <li onClick={() => {filterBtnClick(2); listClick();}}>물가 저렴한순</li>
                    <li onClick={() => {filterBtnClick(3); listClick();}}>물가 비싼순</li>
                </ul>
            </div>
        </div>
    )
}

export default TravelFilter;
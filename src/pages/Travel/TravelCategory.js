import React, { useState } from 'react';
import './TravelCategory.css';

function TravelCategory({categoryBtnClick}) {
    return (
        <div className="travelCategory">
            <div className="category-travelMate common-flex">
                <p>함께/혼자하는 여행</p>
                {/* categoryBtnClick의 값과 travelMate값이 같은 것만 필터링 하기 위해 Travel.js로 값 전달 */}
                <button onClick={() => categoryBtnClick(0)}>가족과 함께 여행</button>
                <button onClick={() => categoryBtnClick(1)}>친구와 함께 여행</button>
                <button onClick={() => categoryBtnClick(2)}>혼자 여행</button>
            </div>
            <div className="category-travelMate common-flex">
                <p>테마별 여행</p>
                {/* categoryBtnClick의 값과 travelMate값이 같은 것만 필터링 하기 위해 Travel.js로 값 전달 */}
                <button onClick={() => categoryBtnClick(3)}>휴양/힐링</button>
                <button onClick={() => categoryBtnClick(4)}>문화/역사 탐방</button>
                <button onClick={() => categoryBtnClick(5)}>쇼핑/도시 라이프</button>
            </div>
        </div>
    )
}

export default TravelCategory;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Travel.css';
import travelData from './travelData.json';
import TravelFilter from './TravelFilter.js';
function Travel() {

    const navigate = useNavigate();
    const viewMoreClick = (id) => {
        navigate(`/travel/${id}`);
    }

    const [filterClickData, setFilterClickData] = useState(0);
    const filterBtnClick = (data) => {
        setFilterClickData(data);
        console.log(data);
    }

    // 필터에서 클릭한 숫자에 따라 정렬을 다르게 함
    const filterData = () => {
        let data = [...travelData];

        switch (filterClickData) {
            case 0: // 추천순 정렬
                return data.sort((a,b) => a.id - b.id);
            case 1: // 여행 난이도순
                return data.sort((a,b) => a.difficulty - b.difficulty);
        }
    }
    return (
        <div className="travel common-flex">
            <TravelFilter filterBtnClick={filterBtnClick} />
            {filterData().map((travel) => (
                <div key={travel.id} className="travel-card">
                    <img className="travel-img" src={process.env.PUBLIC_URL + travel.imgSrc} alt={travel.imgAlt}></img>
                    <div className="travel-short-discription">
                        <p>{travel.name} <span>[{travel.country}]</span></p>
                        <p>{travel.discription}</p>
                        <p><span>여행하기 좋은 달 </span>{travel.bestMonths}</p>
                        <p><span>여행 난이도 </span>{travel.difficulty}</p>
                    </div>
                    <p className="travel-viewMore" onClick={() => viewMoreClick(travel.id)}>► 더 자세히 보기</p>
                </div>
            ))}

        </div>
    )
}

export default Travel;
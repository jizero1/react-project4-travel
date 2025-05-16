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
    return (
        <div className="travel common-flex">
            {/* 여행지이름, 사진, 여행추천시기, 강수량, 여행난이도,
            환율(1달러=1350원), 여행지소개, 주요관광명소, 음식추천,
            전압 및 콘센트, 여행자 팁(팁문화, 사기조심 하라고 알려주는 등) */}
            {/* 여행하기 쉽다면 왜 쉬운지(언어,치안, 의료 등등), 여행 목적별 추천하는 시기도 보여줌 */}
            <TravelFilter filterBtnClick={filterBtnClick} />
            {travelData.map((travel) => (
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
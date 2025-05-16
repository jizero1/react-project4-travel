import React, { useState } from 'react';
import {useParams} from'react-router-dom';
import './TravelDetail.css';
import travelDetailData from './travelDetailData.json';
function TravelDetail() {
    const { id } = useParams(); // Travel.js에서 url로 보낸 id를 받아옴(/travel/5 라면 5를 반환함)
    const travel = travelDetailData.find(item => item.id === Number(id)); // Number(id)는 받아온 id가 문자열 이기 때문에, 다시 숫자로 변환한 거임.
    return (
        <div>
            <p>{travel.name}<span>[{travel.country}]</span></p>
            <img src={process.env.PUBLIC_URL+travel.imgSrc} alt={travel.imgAlt}></img>
            <p>{travel.description}</p>
            <p>여행하기 좋은 달 : {travel.bestMonths}</p>
            <p>{travel.bestMonthsReason}</p>
            <p><span>여행 난이도</span>{travel.difficulty}</p>
            <p><span>강수량</span>{travel.rainfall}</p>
            <p><span>전압</span>{travel.currency}</p>
            <p><span>주요 명소</span> {travel.majorAttractions}</p>
            <p><span>추천 음식</span>{travel.recommendedFoods}</p>
            <p><span>전압</span>{travel.voltageAndPlug}</p>
            <p><span>여행자 팁</span>{travel.travelTips}</p>
            <p><span>한끼 평균 비용</span>{travel.mealCost}</p>
            <p>{travel.travelType}</p>
        </div>
    )
}

export default TravelDetail;
import React, { useState } from 'react';
import {useParams} from'react-router-dom';
import './TravelDetail.css';
import travelDetailData from './travelDetailData.json';
function TravelDetail() {
    const { id } = useParams(); // Travel.js에서 url로 보낸 id를 받아옴(/travel/5 라면 5를 반환함)
    const travel = travelDetailData.find(item => item.id === Number(id)); // Number(id)는 받아온 id가 문자열 이기 때문에, 다시 숫자로 변환한 거임.
    return (
        <div>
            <p>{travel.id}</p>
            <p>{travel.name}</p>
        </div>
    )
}

export default TravelDetail;
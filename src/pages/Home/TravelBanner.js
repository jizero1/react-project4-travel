import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelBanner.css';
import travelBanner from './travelBanner.json';

function TravelBanner() {

    const navigate = useNavigate();

    // 랜덤으로 배너 변경해야함 
    // 화면이 새로고침 된다면, travelBanner.json의 데이터들중
    // 랜덤으로 1개를 출력한다. 

    const randomBanner = () => {
        let random = [...travelBanner];

    }
    return (
        <div className="travelBanner">
            <p className="travelBanner-title">어디로 갈지 고민된다면?</p>
            <div className="travelBanner-container common-flex">
                {travelBanner.map((travel) => (
                    <div key={travel.id} className="travelBanner-container-item">
                        <div className="travelBanner-text">
                            <p className="travelBanner-text-title">{travel.imgAbout}</p>
                            <p className="travelBanner-text-subTitle">{travel.imgName}는 어떤 나라일까? 더 알고싶다면 Click!</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + travel.imgSrc} alt={travel.imgName} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TravelBanner;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelBanner.css';
import travelImgData from './travelBanner.json';

function TravelBanner() {

    const navigate = useNavigate();

    // 랜덤으로 배너 변경해야함 
    return (
        <div className="travelBanner">
            <p className="travelBanner-title">어디로 갈지 고민된다면?</p>
            <div className="travelBanner-container common-flex">
                {travelImgData.map((travel) => (
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
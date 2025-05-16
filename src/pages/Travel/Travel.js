import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Travel.css';
import travelData from './travelData.json';
import TravelFilter from './TravelFilter.js';
import TravelCategory from './TravelCategory.js';
import SearchBar from '../Home/SearchBar.js';
import { useSearch } from '../../contexts/SearchContext';
function Travel() {

    const { inputText } = useSearch();


    console.log("travel"+inputText);
    const navigate = useNavigate();
    const viewMoreClick = (id) => {
        navigate(`/travel/${id}`);
    }

    const [filterClickData, setFilterClickData] = useState(0);
    const filterBtnClick = (data) => {
        setFilterClickData(data);
        console.log(data);
    }

     // TravelCategory.js에서 클릭한 카테고리 버튼에 따라 필터링함.
    const [category, setCategory] = useState('');
    const categoryBtnClick = (data) => {   
        setCategory(data);
        console.log(category);
    }

    // TravelFilter.js 정렬 버튼에서 클릭한 숫자에 따라 정렬을 다르게 함
    const filterData = () => {
        let data = [...travelData];
        switch (filterClickData) {
            case 0: // 추천순 정렬
                data.sort((a,b) => a.id - b.id); break;
            case 1: // 여행 난이도순
                data.sort((a,b) => a.difficulty - b.difficulty); break;
            case 2: // 물가 저렴한순
                data.sort((a,b) => a.costLevel - b.costLevel); break;
            case 3: // 물가 비싼순
                data.sort((a,b) => b.costLevel - a.costLevel); break;
            default: 
                break;
        }

        // 함께/혼자하는 여행 카테고리에서 선택한 카테고리만 필터링 해서 보여줌.
        // 0은 가족과함께, 1은 친구와함께, 2는 혼자하는 여행
        if (category === 0) {
            data = data.filter(item => item.travelMate === '0');
        } else if(category === 1) {
            data = data.filter(item => item.travelMate === '1');
        } else if (category === 2) {
            data = data.filter(item => item.travelMate === '2');
        }

        // 테마여행 카테고리에서 선택한 카테고리만 필터링 해서 보여줌.
        // 0은 휴양/힐링, 1은 문화/역사탐방, 2는 쇼핑/도시라이프
        if (category === 3) {
            data = data.filter(item => item.travelTheme === '0');
        } else if (category === 4) {
            data = data.filter(item => item.travelTheme === '1');
        } else if (category === 5) {
            data = data.filter(item => item.travelTheme === '2');
        }


        return data;
    }


    return (
        <div className="travel common-flex">
            <TravelFilter filterBtnClick={filterBtnClick} />
            <TravelCategory categoryBtnClick={categoryBtnClick}/>
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
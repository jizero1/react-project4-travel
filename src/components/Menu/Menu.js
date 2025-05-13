import React from 'react';
import './Menu.css';
import menuNameData from './menuNameData.json';

function Menu() {
    return (
        <div className="menu common-flex">
            <div className="menu-title common-flex">
                <p>✈️ 여행 카테고리</p>
            </div>
            <div style={{display: 'flex'}}>
            {menuNameData.map((menu) => (
                <div key={menu.id} className="common-menu common-flex">
                    <div className="common-menuName">
                        <p className="common-menuName-icon">{menu.icon}</p>
                        <p className="common-menuName-text">{menu.title}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Menu;
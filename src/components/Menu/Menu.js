import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import menuNameData from './menuNameData.json';

function Menu() {

    const navigate = useNavigate();
    
    const menuClick = () => {
        navigate('/travel')
    }
    return (
        <div className="menu common-flex">
            {menuNameData.map((menu) => (
                <div key={menu.id} className="common-menu common-flex" onClick={menuClick}>
                    <div className="common-menuName">
                        <p className="common-menuName-icon">{menu.icon}</p>
                        <p className="common-menuName-text">{menu.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Menu;
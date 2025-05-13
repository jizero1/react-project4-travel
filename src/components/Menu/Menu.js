import React from 'react';
import './Menu.css';
import menuNameData from './menuNameData.json';

function Menu() {
    return (
        <div className="menu common-flex">
            {menuNameData.map((menu) => (
                <div key={menu.id} className="common-menu common-flex">
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
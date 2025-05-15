import React, { useState } from 'react';
import './Header.css';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();

    const logoClick = () => {
        navigate('/');
    }
    const saveHeartPage = () => {
        navigate('/SaveHeart');
    }
    return (
        <div className="header">
            <p className="header-logo common-header" onClick={logoClick}>TRAVEL</p>
            <div className="header-save common-header common-flex" onClick={saveHeartPage}>
                <FaHeart className="header-save-icon"/>
                <p className="header-save-count common-flex">0</p>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import Menu from '../../components/Menu/Menu';
import TravelBanner from './TravelBanner';
function Home() {
    return (
        <div className="home">
            <SearchBar/>
            <Menu/>
            <TravelBanner/>
        </div>
    )
}

export default Home;
import React from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import TravelBanner from './TravelBanner';

function Home() {

    return (
        <div className="home">
            <SearchBar />
            <TravelBanner />
        </div>
    )
}

export default Home;
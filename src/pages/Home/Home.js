import React from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import Menu from '../../components/Menu/Menu';
import TravelBanner from './TravelBanner';

// import TravelCategory from '../Travel/TravelCategory';
function Home() {

    return (
        <div className="home">
            <SearchBar />
            {/* <Menu/> */}
            {/* <TravelCategory/> */}
            <TravelBanner/>
        </div>
    )
}

export default Home;
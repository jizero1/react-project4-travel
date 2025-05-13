import React from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import Menu from '../../components/Menu/Menu';

function Home() {
    return (
        <div className="home common-flex">
            <SearchBar/>
            <Menu/>
        </div>
    )
}

export default Home;
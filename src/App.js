import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Travel from './pages/Travel/Travel';
import SaveHeart from './pages/SaveHeart/SaveHeart';
import TravelDetail from './pages/TravelDetail/TravelDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { SearchProvider } from './contexts/SearchContext';
function App() {

  return (
    <SearchProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/:id" element={<TravelDetail />} />
            <Route path="/saveHeart" element={<SaveHeart />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </SearchProvider>
  );
}

export default App;
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Travel from './pages/Travel/Travel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Menu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
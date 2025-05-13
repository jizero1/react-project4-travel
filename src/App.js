import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Products from './pages/Products/Products';
// import Cart from './pages/Cart/Cart';
// import Menu from './components/Menu/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Menu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
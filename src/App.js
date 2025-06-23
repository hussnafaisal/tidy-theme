import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import WallOfLove from './pages/WallOfLove';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import './App.css';
import LoginPage from './components/Login/LoginPage';
import DemoRequest from './components/DemoReuest/DemoRequest';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/request-demo" element={<DemoRequest />} />
            <Route path="/wall-of-love" element={<WallOfLove />} />
            <Route path="/support" element={<Support />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

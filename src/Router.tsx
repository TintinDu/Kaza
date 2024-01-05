import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { About } from './pages/About/About.tsx';
import { NotFound } from './pages/NotFound/NotFound.tsx';
import { Home } from './pages/Home/Home.tsx';
import { Housing } from './pages/Housing/Housing.tsx';

const Router: React.FC = () => (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:housingId" element={<Housing />}>
          <Route path="oki" element={< Footer/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
);

export default Router;

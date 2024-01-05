import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar.tsx';
import { Footer } from './components/Footer.tsx';
import { About } from './pages/About.tsx';
import { NotFound } from './pages/NotFound.tsx';
import { Home } from './pages/Home.tsx';
import { Housing } from './pages/Housing.tsx';

const App: React.FC = () => (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing" element={<Housing />}>
          <Route path="client" element={< Footer/>} />
          <Route path="freelance" element={< NavBar/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home_page';  // Головна сторінка
import Catalog from './components/catalog';  // Каталог
import Footer from './components/footer';  // Футер
import Navigation from './components/navigation';  // Навігація
import Header from './components/header';  // Хедер

function App() {
  return (
    <Router>
      <div>
        <Header />  {/* Рендеримо Header на всіх сторінках */}
        <Navigation />  {/* Рендеримо Navigation на всіх сторінках */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Головна сторінка */}
          <Route path="/catalog" element={<Catalog />} />  {/* Каталог */}
        </Routes>

        <Footer />  {/* Футер на всіх сторінках */}
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link з react-router-dom
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li> {/* Перехід на головну сторінку */}
        <li><Link to="/catalog">Products</Link></li> {/* Перехід на сторінку каталогу */}
        <li><a href="#contact">Contact</a></li> {/* В даному випадку не потрібно змінювати */}
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <NavLink to="/rgb/24/58/55" className="rich-black">
        Rich Black
      </NavLink>
      <NavLink to="/rgb/67/37/52" className="dark-purple">
        Dark Purple
      </NavLink>
      <NavLink to="/rgb/196/73/0" className="mahogany">
        Mahogany
      </NavLink>
    </header>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <NavLink to="/rgb/24/58/55" className="Rich Black">
        Rich Black
      </NavLink>
      <NavLink to="/rgb/67/37/52" className="Dark Purple">
        Dark Purple
      </NavLink>
      <NavLink to="/rgb/196/73/0" className="Mahogany">
        Mahogany
      </NavLink>
    </header>
  );
}

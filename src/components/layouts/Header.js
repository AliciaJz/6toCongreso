import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link className="App-link" to="/clases">Clases</Link><Link className="App-link" to="/asistentes">Asistentes</Link>
    </header>
  )
}

export default Header
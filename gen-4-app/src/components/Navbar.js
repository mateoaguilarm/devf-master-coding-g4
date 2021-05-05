import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { loginService } from '../services/UserService';

function Navbar() {
  const browserHistory = useHistory();

  const loginAction = () => {
    const response = loginService('pepito@email.com', '123456');

    if (response) {
      browserHistory.go(0);
    } else {
      alert('Email o contrasenia incorrectos');
    }
  };

  const logoutAction = ()=>{
    sessionStorage.clear()
    browserHistory.go(0);
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          React
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            {sessionStorage.getItem('token') && (
              <li className='nav-item'>
                <Link className='nav-link' to='/paises'>
                  Paises
                </Link>
              </li>
            )}

            <li className='nav-item'>
              <Link className='nav-link' to='/contadores'>
                Contadores
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/mostrar-componente'>
                Mostrar Componente
              </Link>
            </li>

            <li className='nav-item'>
              {sessionStorage.getItem('token') ? (
                <Link className='nav-link' onClick={logoutAction}>
                  Logout
                </Link>
              ) : (
                <Link className='nav-link' onClick={loginAction}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

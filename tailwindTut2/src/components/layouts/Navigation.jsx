import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const handleCickLogo = () => {
    navigate('/');
  };

  return (
    <>
      <header className="flex bg-lime-300">
        <div className="logo flex-none w-14 h-14 p-4">
          <div className="logo-typo">
            <button
              type="button"
              className="logoClick"
              onClick={handleCickLogo}
            >
              <span>YTK</span>
            </button>
          </div>
        </div>
        <HamburgerButton />
        <nav className="flex flex-1">
          <ul className="p-4">
            <li className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Navigation;

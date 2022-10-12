import { useState, useRef } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';
import { useAutoClose } from '../../hooks/useAutoClose';
import useResize from '../../hooks/useResize';

function Navigation() {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [reversed, setReversed] = useState(false);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const handleCickLogo = () => {
    navigate('/');
  };

  const onpress = (event) => {
    console.log('haahahha');
    event.stopPropagation();
    setShow(!show);
    setReversed(!reversed);
  };

  useAutoClose({ setShow, menuRef, setReversed });
  useResize({ setShow, show, setReversed });

  return (
    <>
      <header className="flex bg-lime-300 relative">
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
        <HamburgerButton
          onClick={onpress}
          label="Menu"
          reversed={reversed}
          aria-controls="primary-navigation"
          aria-expanded={show}
        />
        <section
          id="mobile-menu"
          className="top-68 justify-content-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl"
        >
          <nav
            className="flex min-h-screen flex-col items-center py-2"
            aria-label="mobile"
          >
            <ul
              ref={menuRef}
              id="primary-navigation"
              className={`${
                show ? 'translate-x-full' : '-translate-x-0'
              } primary-navigation ease-in-out duration-500 p-4 sm:flex bg-lime-300 w-full h-screen`}
              data-visible={show}
            >
              <li className="w-full p-4">
                <Link to="/" className="hover:opacity-90">
                  Home {show}
                </Link>
              </li>
              <li className="w-full p-4">
                <Link to="/about" className="hover:opacity-90">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>

      <Outlet />
    </>
  );
}

export default Navigation;

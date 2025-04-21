import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import resouce from '../resouce';
import './Navigation.css';
import SubNav from '../Sub-Nav/SubNav';
import Dropdown from '../Dropdown/Dropdown';

function Navigation({ setActive, active }) {
  const [toggleNav, setToggleNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const [clickTracker, setClickTracker] = useState('');

  const handleScrollToSection = (id, name) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(name);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const scrolledY = window.scrollY;
        setScrolled(scrolledY > headerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
      <div className="Navigation">
        <div className="second-row">
          <div className="logo">
            <Link to="/"><img src={resouce.NewBrandLogo} alt="logo" /></Link>
          </div>
          <div className="mobile-menu">
            <i className="fa-solid fa-bars" onClick={() => setToggleNav(true)}></i>
          </div>
          <ul className="nav">
            <Link to="/">
              <li onClick={() => setActive('home')} className={active === 'home' ? 'active' : ''}>
                Home
              </li>
            </Link>

            <li
              className="nav-item relative"
              onClick={() => {
                setActive('about');
                setClickTracker(clickTracker === 'About' ? '' : 'About'); 
              }}
            >
              About Gengross
              {clickTracker === 'About' && (
                <Dropdown type="About" setClickTracker={setClickTracker} />
              )}
            </li>

            <li
              className="nav-item relative"
              onClick={() => {
                handleScrollToSection('services', 'news');
                setClickTracker(clickTracker === 'Services' ? '' : 'Services');
                setActive('Services');
              }}
            >
              Services
              {clickTracker === 'Services' && (
                <Dropdown type="Services" setClickTracker={setClickTracker} />
              )}
            </li>

            <Link to="/AboutGengross">
              <li
                onClick={() => handleScrollToSection('founder', 'Enviroment')}
                className={active === 'Enviroment' ? 'active' : ''}
              >
                Founder
              </li>
            </Link>

            <Link to="/Product">
              <button
                className={`find ${active === 'find' ? 'active' : ''}`}
                onClick={() => setActive('find')}
              >
                FindProduct
              </button>
            </Link>
          </ul>
        </div>
      </div>
      {toggleNav && <SubNav setToggleNav={setToggleNav} />}
    </div>
  );
}

export default Navigation;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown({ type, setClickTracker }) {
  const dropdownWrapperRef = useRef(null);

  const AboutDrop = [
    { title: 'Our Team', path: '/AboutGengross' },
    { title: 'Manufacturing', path: '/About' },
    { title: 'Work-Culture', path: '/Media' },
  ];

  const services = [
    { title: 'Consultancy', path: '/consultancy' },
    { title: 'Telehealth Services', path: '/telehealth' },
    { title: 'Diagnostic Solutions', path: '/diagnostic' },
    { title: 'Healthcare Software', path: '/software' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(event.target)
      ) {
        setClickTracker('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setClickTracker]);

  const menuItems = type === 'About' ? AboutDrop : services;

  return (
    <div
      ref={dropdownWrapperRef}
      className={type === 'About' ? 'Dropdown-About' : 'Dropdown-services'}
    >
      <ul>
        {menuItems.map((item, index) => (
          <Link to={item.path}><li key={index} onClick={() => setClickTracker('')}>
            {item.title}
          </li></Link>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;

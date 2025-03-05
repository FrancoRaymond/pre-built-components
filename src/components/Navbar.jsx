import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuState, setMenuState] = useState('');
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize > 640) {
      setMenuState('');
    }
  }, [screenSize]);

  useEffect(() => {
    document.body.style.overflow = menuState === 'active' ? 'hidden' : 'auto';
  }, [menuState]);

  const handleHamburgerClick = () => {
    setMenuState(menuState === 'active' ? '' : 'active');
  };

  const closeMenu = () => setMenuState('');

  return (
    <div className="navbar bg-black text-white flex px-2 justify-between py-1 items-center sm:px-5 md:px-16 lg:px-32 z-50  sticky top-0 border-b border-opacity-75 border-black">
      <h1 className="text-[1.6rem] font-semibold z-20 sm:text-3xl lg:text-4xl outline-none">
        <a href="/">Logo</a>
      </h1>
      <nav className={`${menuState} ${screenSize > 640 ? 'flex' : ''}`}>
        <ul className="flex gap-7 lg:gap-10">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
      <div
        aria-label="Toggle menu"
        onClick={handleHamburgerClick}
        className={`menu ${menuState} ${screenSize > 640 ? 'hidden' : 'flex'} flex-col gap-[0.3rem] cursor-pointer z-20`}
      >
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>
    </div>
  );
};

export default Navbar;

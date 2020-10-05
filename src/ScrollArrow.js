import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import './App.css';


const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset < 900) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset >= 900) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 900, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <FaArrowCircleDown className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
  );
}

export default ScrollArrow;
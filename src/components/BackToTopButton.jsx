// src/components/BackToTopButton.js
import  { useState, useEffect } from 'react';
import { MdOutlineVerticalAlignTop } from 'react-icons/md';
import React from "react";
const BackToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}`;
    setScrollProgress(scroll);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      className="vp-back-to-top-button"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <span
        className="vp-scroll-progress"
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={scrollProgress}
      >
        <svg>
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray={`${scrollProgress} ${100 - scrollProgress}`}
          ></circle>
        </svg>
      </span>
      <div className="back-to-top-icon">
      <MdOutlineVerticalAlignTop />

      </div>
    </button>
  );
};

export default BackToTopButton;
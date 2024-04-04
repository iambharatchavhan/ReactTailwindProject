import React, { useState, useEffect } from 'react';

const HalfCircle = () => {
  const [visibleLetters, setVisibleLetters] = useState([]);
  const totalLetters = 50; // Total number of 'M's
  const visibilityThreshold = 0.9; // Threshold for visibility

  useEffect(() => {
    // Initialize the visibility of 'M's randomly
    const initialVisibleLetters = Array.from({ length: totalLetters }, () => Math.random() > visibilityThreshold);
    setVisibleLetters(initialVisibleLetters);

    // Set interval to toggle visibility of 'M's randomly
    const interval = setInterval(() => {
      const updatedLetters = [...visibleLetters];
      const indexToChange = Math.floor(Math.random() * totalLetters);
      updatedLetters[indexToChange] = !updatedLetters[indexToChange];
      setVisibleLetters(updatedLetters);
    }, 2000); // Change the interval as needed

    // Cleanup interval
    return () => clearInterval(interval);
  }, []); // Run effect only once on mount

  const renderLine = (x, y, count, space) => {
    const letters = [];
    let startX = x;
    let startY = y;
    for (let i = 0; i < count; i++) {
      const isVisible = visibleLetters[i];
      const transitionDelay = Math.random() * 2; // Generate a random delay between 0 and 2 seconds
      letters.push(
        <text
          key={i}
          x={startX}
          y={startY}
          className={`m-letter fill-current text-[20px] ${isVisible ? 'opacity-0' : 'opacity-100'}`}
          style={{ transitionDelay: `${transitionDelay}s` }}
        >
          M
        </text>
      );
      startX += space; // Adjust the horizontal spacing
    }
    return letters;
  };

  return (
    <svg width="" height="" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
      {renderLine(190, 50, 1, 20)}
      {renderLine(160, 80, 2, 72)}
      {renderLine(110, 100, 4, 52)}
      {renderLine(88, 125, 6, 42)}
      {renderLine(70, 155, 8, 37)}
      {renderLine(55, 185, 10, 33)}
      {renderLine(38, 220, 12, 30)}
      {renderLine(23, 250, 14, 28)}
      {renderLine(10, 278, 16, 27)}
      {renderLine(5, 310, 18, 25)}
      {renderLine(-5,  340, 20, 24)}
    </svg>
  );
};

export default HalfCircle;

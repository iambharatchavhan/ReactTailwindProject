import React, { useState, useEffect } from 'react';

const AlphabetM = () => {
  const [letterCounts, setLetterCounts] = useState(Array.from({ length: 20 }, () => Math.floor(Math.random() * (5)) + 20));
  const [displayedLetters, setDisplayedLetters] = useState(Array.from({ length: 20 }, () => []));

  useEffect(() => {
    const interval = setInterval(() => {
      const newCounts = letterCounts.map(() => Math.floor(Math.random() * (5)) + 20); // Random count between 20 and 20 for each column
      setLetterCounts(newCounts);
    }, 2000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [letterCounts]);

  useEffect(() => {
    const timeouts = letterCounts.map((count, index) => setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * count);
      const updatedLetters = [...displayedLetters[index]];
      updatedLetters[randomIndex] = !updatedLetters[randomIndex];
      setDisplayedLetters(prevState => {
        const newState = [...prevState];
        newState[index] = updatedLetters;
        return newState;
      });
    }, 500)); // Change the interval as needed

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [letterCounts, displayedLetters]);

  const renderLetters = (count, index) => {
    const letters = [];
    for (let i = 0; i < count; i++) {
      const isVisible = displayedLetters[index][i] !== false;
      letters.push(
        <text
          key={i}
          className={`m-letter border-2 border-red-500 fill-current text-white text-[10px] transform transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          x={10}
          y={20 + i * 10}
        >
          M
        </text>
      );
    }
    return letters;
  };

  // Generate an array of SVG elements with "M" characters
  const renderColumns = () => {
    return letterCounts.map((count, index) => (
      <svg key={index} className="w-8 h-[200px] mr-[-1rem] " viewBox="">
        {renderLetters(count, index)}
      </svg>
    ));
  };

  return (
    <div className='flex flex-row-reverse'>
      {renderColumns()}
    </div>
  );
};

export default AlphabetM;

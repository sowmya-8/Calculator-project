import React, { useState } from 'react';
import './NormalCalculator.css';

export default function NormalCalculator() {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    if (value === 'C') return setInput('');
    if (value === '=') {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C', '+',
    '='
  ];

  return (
    <div className="calculator">
      <input className="calc-display" type="text" value={input} readOnly />
      <div className="calc-grid">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={`calc-btn ${btn === '=' ? 'equal' : ''} ${btn === 'C' ? 'clear' : ''}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

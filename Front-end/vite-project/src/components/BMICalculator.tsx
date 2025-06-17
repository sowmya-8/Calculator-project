import React, { useState } from 'react';
import './BMICalculator.css';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (w > 0 && h > 0) {
      const result = w / ((h / 100) ** 2);
      setBmi(parseFloat(result.toFixed(2)));
    }
  };

  return (
    <div className="bmi-box">
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi !== null && (
        <div className="bmi-result">
          BMI: <strong>{bmi}</strong>
        </div>
      )}
    </div>
  );
}

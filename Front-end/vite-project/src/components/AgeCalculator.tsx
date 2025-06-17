import React, { useState } from 'react';
import './AgeCalculator.css';

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState<number | null>(null);

  const calcAge = () => {
    const birth = new Date(dob);
    if (isNaN(birth.getTime())) return;

    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    const d = today.getDate() - birth.getDate();
    if (m < 0 || (m === 0 && d < 0)) years--;

    setAge(years);
  };

  return (
    <div className="age-box">
      <h2>Age Calculator</h2>

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calcAge}>Calculate Age</button>

      {age !== null && (
        <div className="age-result">
          You are <strong>{age}</strong> years old.
        </div>
      )}
    </div>
  );
}


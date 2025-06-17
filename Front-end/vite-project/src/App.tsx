import React, { useState } from 'react';
import NormalCalculator from './components/NormalCalculator';
import BMICalculator from './components/BMICalculator';
import AgeCalculator from './components/AgeCalculator';
import './App.css';

export default function App() {
  const [view, setView] = useState<'home' | 'normal' | 'bmi' | 'age'>('home');

  return (
    <div className="app-container">
      {view === 'home' && (
        <>
          <h1>Calculator</h1>
          <div className="button-grid">
            <button onClick={() => setView('normal')}>Normal Calculator</button>
            <button onClick={() => setView('bmi')}>BMI Calculator</button>
            <button onClick={() => setView('age')}>Age Calculator</button>
          </div>
        </>
      )}

      {view === 'normal' && (
        <>
          <NormalCalculator />
          <button className="back-btn" onClick={() => setView('home')}>🔙 Back</button>
        </>
      )}

      {view === 'bmi' && (
        <>
          <BMICalculator />
          <button className="back-btn" onClick={() => setView('home')}>🔙 Back</button>
        </>
      )}

      {view === 'age' && (
        <>
          <AgeCalculator />
          <button className="back-btn" onClick={() => setView('home')}>🔙 Back</button>
        </>
      )}
    </div>
  );
}


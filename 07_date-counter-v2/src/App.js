import { useState } from 'react';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Step />
    </div>
  );
};

const Step = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const isChange = step === 1 && count === 0;

  const handleMinus = () => {
    setCount((count) => count - step);
  };
  const handlePlus = () => {
    setCount((count) => count + step);
  };
  const handleReset = () => {
    setCount(0);
    setStep(1);
  };
  return (
    <div className='step-div'>
      <div className='slider'>
        <input
          type='range'
          min={0}
          max={10}
          value={step}
          className='input-slider'
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step: {step}</span>
      </div>
      <div className='input-fill'>
        <button className='minus' onClick={handleMinus}>
          -
        </button>
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className='plus' onClick={handlePlus}>
          +
        </button>
      </div>
      <div className={`reset-button ${!isChange ? '' : 'hide'}`}>
        <button className='btn' onClick={handleReset}>
          Reset
        </button>
      </div>
      <ShowDate count={count} />
    </div>
  );
};

const ShowDate = ({ count }) => {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p className='message'>
      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <strong>{date.toDateString()}</strong>.
      </span>
    </p>
  );
};

export default App;

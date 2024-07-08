import { useState } from 'react';
import './App.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  return (
    <>
      <button className='close' onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <Steps step={step} />
          <Button step={step} setStep={setStep} />
        </div>
      )}
    </>
  );
};

const Steps = ({ step }) => {
  return (
    <>
      <div className='numbers'>
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className='message'>
        Step 0{step} : {messages[step - 1]}
      </p>
    </>
  );
};

const Button = ({ step, setStep }) => {
  const handlePrevious = () => {
    if (step <= 1) {
      return;
    }
    setStep((step) => step - 1);
  };

  const handleNext = () => {
    if (step >= 3) {
      return;
    }
    setStep((step) => step + 1);
  };
  return (
    <div className='buttons'>
      <button
        className={`btn ${step <= 1 ? 'hide' : 'active-btn'}`}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className={`btn ${step >= 3 ? 'hide' : 'active-btn'}`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default App;

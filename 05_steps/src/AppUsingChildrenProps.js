import { useState } from 'react';
import './App.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const App_v1 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  return (
    <>
      <button className='close' onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <p className='message'>Uses Children Prop</p>
          <Steps step={step}>
            <p className='message'>
              Step 0{step} : {messages[step - 1]}
            </p>
          </Steps>
          <Buttons step={step} setStep={setStep} />
        </div>
      )}
    </>
  );
};

const Steps = ({ step, children }) => {
  return (
    <>
      <div className='numbers'>
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      {children}
    </>
  );
};

const Buttons = ({ step, setStep }) => {
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
      <Button
        btnClass={`${step <= 1 ? 'hide' : 'active-btn'}`}
        onClick={handlePrevious}
      >
        👈 Previous
      </Button>
      <Button
        btnClass={`${step >= 3 ? 'hide' : 'active-btn'}`}
        onClick={handleNext}
      >
        Next 👉
      </Button>
    </div>
  );
};

const Button = ({ btnClass, onClick, children }) => {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default App_v1;

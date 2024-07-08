import { useState } from 'react';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date().toLocaleDateString());
  return (
    <div className='App'>
      <Step type='Step' value={step} setValue={setStep} jump={1} />
      <Step type='Count' value={count} setValue={setCount} jump={step} />
      {/* <Count step={step} value={count} setValue={setCount} /> */}
      <PrintDay count={count} />
    </div>
  );
};

const Step = ({ type, value, setValue, jump }) => {
  return (
    <div className='step'>
      <button
        id='decrement'
        className='icon'
        onClick={() => {
          setValue((value) => value - jump);
        }}
      >
        -
      </button>
      <p className='para-property'>
        {type}: {value}
      </p>
      <button
        id='increment'
        className='icon'
        onClick={() => setValue((value) => value + jump)}
      >
        +
      </button>
    </div>
  );
};

// Not used in optimized approach
// Approximately similar to Step
// function Count({ step, value, setValue }) {
//   return (
//     <div className="step">
//       <button
//         id="decrement"
//         className="icon"
//         onClick={() => setValue((value) => value - step)}
//       >
//         -
//       </button>
//       <p className="para-property">Step: {value}</p>
//       <button
//         id="increment"
//         className="icon"
//         onClick={() => setValue((value) => value + step)}
//       >
//         +
//       </button>
//     </div>
//   );
// }

const PrintDay = ({ count }) => {
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <p>
      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </p>
  );
};

export default App;

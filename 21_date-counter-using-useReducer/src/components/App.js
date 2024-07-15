import { useReducer } from 'react';
import ShowDate from './ShowDate';
import './App.css';

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown Action...');
  }
};

const App = () => {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  const defineStep = (e) => {
    dispatch({ type: 'setStep', payload: +e.target.value });
  };

  const defineCount = (e) => {
    dispatch({ type: 'setCount', payload: +e.target.value });
  };

  const handleDecrement = () => dispatch({ type: 'decrement' });
  const handleIncrement = () => dispatch({ type: 'increment' });
  const handleReset = () => dispatch({ type: 'reset' });

  const isChanged = count !== 0 || step !== 1;

  return (
    <div className='App'>
      <div className='slider'>
        <input
          type='range'
          min={0}
          max={10}
          className='input-slider'
          value={step}
          onChange={defineStep}
        />
        <span>Step: {step}</span>
      </div>

      <div className='input-fill'>
        <button className='minus' onClick={handleDecrement}>
          -
        </button>
        <input type='text' value={count} onChange={defineCount} />
        <button className='plus' onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className={`reset ${isChanged ? '' : 'hide'}`}>
        <button className='btn' onClick={handleReset}>
          Reset
        </button>
      </div>
      <ShowDate count={count} />
    </div>
  );
};

export default App;

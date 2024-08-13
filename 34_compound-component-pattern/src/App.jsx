import Counter from './Counter';
import './styles.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount="top"
      /> */}

      <div className='wrapper'>
        <Counter>
          <Counter.Label>My super flexible counter</Counter.Label>
          <span className='counter-beautify'>
            <Counter.Decrease icon='-' />
            <Counter.Count />
            <Counter.Increase icon='+' />
          </span>
        </Counter>
      </div>
      <br />

      <div className='wrapper'>
        <Counter>
          <div className='counter-beautify'>
            <Counter.Decrease icon='◀️' />
            <Counter.Count />
            <Counter.Increase icon='▶️' />
          </div>
        </Counter>
      </div>
    </div>
  );
};

export default App;

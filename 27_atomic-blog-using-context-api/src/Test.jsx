import { useState } from 'react';

const SlowComponent = () => {
  const words = Array.from({ length: 100_000 }, () => 'Word');

  return (
    <ul>
      {words.map((word, index) => (
        <li key={index}>
          {index} : {word}
        </li>
      ))}
    </ul>
  );
};

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Incraese: {count}</button>
      {children}
    </div>
  );
};

const Test = () => {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>Slow counter?!?</h1>
  //     <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
  //     <SlowComponent />
  //   </div>
  // );
  return (
    <div>
      <h1>Slow Counter?!?</h1>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
};

export default Test;

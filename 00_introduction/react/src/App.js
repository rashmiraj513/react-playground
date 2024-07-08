import { useEffect, useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      {/* Because of some strange reason, when the `getAdvice` is called only once, it still shows the 
        value of `count = 2`. That is why `count - 1` is displayed. */}
      <Message count={count} />
    </div>
  );
};

const Message = (props) => {
  return (
    <p>
      You have read <strong>{props.count - 1}</strong> pieces of advice.
    </p>
  );
};

export default App;

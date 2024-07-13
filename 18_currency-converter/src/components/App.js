import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [converted, setConverted] = useState('');

  return (
    <div className='app'>
      <h1 className='heading'>Currency Converter</h1>
      <CurrencyConverter onConverted={setConverted} />
      <p className='converted'>Converted: {converted}</p>
    </div>
  );
};

const CurrencyConverter = ({ onConverted }) => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const convert = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          {
            signal: controller.signal,
          }
        );
        const data = await res.json();
        onConverted(data?.rates[toCurrency]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (fromCurrency === toCurrency) {
      return onConverted(amount);
    }
    convert();

    return () => controller.abort();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className='currency-converter'>
      <input
        type='text'
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value='INR'>INR</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value='INR'>INR</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
      </select>
    </div>
  );
};

export default App;

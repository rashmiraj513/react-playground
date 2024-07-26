import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

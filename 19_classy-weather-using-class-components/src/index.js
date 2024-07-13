import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
// import App from './components/App-v1';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

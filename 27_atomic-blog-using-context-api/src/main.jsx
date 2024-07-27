import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
// import App from './App-refactor';
import App from './App-memo';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

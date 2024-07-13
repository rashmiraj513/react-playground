import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App_v1 from './components/App-v1';
// import App_v2 from './components/App-v2';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Rotas } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
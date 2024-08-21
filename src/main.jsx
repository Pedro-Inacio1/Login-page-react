import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import Elementz from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Elementz />
  </StrictMode>
);
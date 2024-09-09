import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import Elementz from './routes';
import { AuthProvider } from './Context/auth';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Elementz />
  </AuthProvider>
);
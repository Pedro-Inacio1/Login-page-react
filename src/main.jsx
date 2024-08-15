import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/home.jsx'
import Contact from './routes/contact.jsx'
import Login from './routes/Login.jsx'
import App from './App.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import AboutUs from './routes/AboutUs.jsx'  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/About-us",
        element: <AboutUs />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);

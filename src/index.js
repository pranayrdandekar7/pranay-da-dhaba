import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Navabr from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/navbar",
    element: <Navabr/>
  }
])
root.render(<RouterProvider router={router} />);



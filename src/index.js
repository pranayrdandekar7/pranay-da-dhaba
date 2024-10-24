import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Navabr from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from './components/Slider/Slider';

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
  },
  {
    path:"/footer",
    element:<Footer/>
  },
  {
    path:"/slider",
    element:<Slider/>
  }
])
root.render(<RouterProvider router={router} />);



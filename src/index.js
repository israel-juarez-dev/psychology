import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  About from './components/About'
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services'
import Blog from './components/Blog'
import Infantil from './terapias/Infantil'
import Individual from './terapias/Individual'
import Pareja from './terapias/Pareja'
import Familia from './terapias/Familia'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainNavBar from './MainNavBar';
import AboutFAQ from './components/AboutFAQ';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: < Services/>,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/aboutusfaq",
    element: <AboutFAQ />,
  },
  {
    path: "/terapiaInfantil",
    element: <Infantil />,
  },
  {
    path: "/terapiaIndividual",
    element: <Individual />,
  },
  {
    path: "/terapiaPareja",
    element: < Pareja/>,
  },
  {
    path: "/terapiaFamilia",
    element: < Familia/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MainNavBar/>
<App/>
   <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

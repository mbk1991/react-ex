import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider,
  Link
} from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Topics from './components/Topics.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/topics",
      element: <Topics />
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/*",
      element: <>404 Not Found!</>

    },
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
)

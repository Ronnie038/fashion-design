import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './page/home/Home.jsx';
import TopCategory from './page/home/man/TopCategory';

const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "man",
            element: <TopCategory></TopCategory>
          }
        ]
      }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

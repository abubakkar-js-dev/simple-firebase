import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Header/Home/Home';
import Main from './Layouts/Main';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

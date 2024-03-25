import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)

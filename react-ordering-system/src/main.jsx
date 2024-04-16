import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { OrderProvider } from './context/OrderProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  </React.StrictMode>,
)

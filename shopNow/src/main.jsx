import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/authContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContext>
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
</AuthContext>

  </StrictMode>,
)

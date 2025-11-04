import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/authContext.jsx'
import { CartContext } from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <CartContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContext>
    </AuthContext>
  </StrictMode>,
)

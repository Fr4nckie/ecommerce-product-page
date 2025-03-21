import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/globalStyles.js'
import { CartContextProvider } from './hooks/useCart.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartContextProvider>
            <GlobalStyles />
            <App />
        </CartContextProvider>
    </StrictMode>
)

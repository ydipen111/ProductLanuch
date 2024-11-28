import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { ThemeProvider } from '@material-tailwind/react';
// import { ThemeProvider } from '@material-tailwind/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
        <ToastContainer autoClose={1000} position='top-right' pauseOnHover={false} />
      </Provider>

    </ThemeProvider>

  </StrictMode>,
)

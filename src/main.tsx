
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <App />
    </Provider>
  </StrictMode>
);

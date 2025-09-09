import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { App } from './app/App'
import { Toaster } from "react-hot-toast";

export default function AppToster() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

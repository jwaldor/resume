import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ShortenedApp from './ShortenedApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <ShortenedApp />
  </StrictMode>,
)

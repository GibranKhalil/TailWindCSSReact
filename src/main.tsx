import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './interface/components/header.tsx'
import './index.css'
import { MainComponent } from './interface/components/main.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <MainComponent />
  </React.StrictMode>,
)

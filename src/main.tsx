import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LawLabPage } from './interface/components/lawLab'
import { CarShowPage } from './interface/components/carShow'
import { OrionPage } from './interface/components/orion'
import { StretchPage } from './interface/components/stretch'
import { WavePage } from './interface/components/wave'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>



    <CarShowPage />

  </React.StrictMode>,
)

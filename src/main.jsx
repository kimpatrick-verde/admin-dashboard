import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ContextProvider } from './contexts/ContextProvider';

createRoot(document.getElementById('root')).render(<ContextProvider><App /></ContextProvider>)

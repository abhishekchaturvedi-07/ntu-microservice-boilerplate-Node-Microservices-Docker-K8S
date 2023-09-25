import './index.css'

import App from './App';
import React from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root')
const roots = createRoot(rootElement)

roots.render(
  <App />
)

 
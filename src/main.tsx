import React from 'react';
import ReactDOM from 'react-dom/client';
// https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app
import './fonts/Formula1/Formula1-Regular.otf';
import './fonts/Formula1/Formula1-Bold.otf';
import './fonts/Formula1/Formula1-Wide.otf';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

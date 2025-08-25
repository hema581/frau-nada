import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// تم تغيير الاستيراد من BrowserRouter إلى HashRouter
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* تم تغيير المكون إلى HashRouter (لا يحتاج basename) */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
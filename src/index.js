import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  {
path:"/",
element:<Home/>
  },
  {
    path:"*",
    element:"404 Not Found"
  }
);



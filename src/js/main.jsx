import React from 'react';
import ReactDOM from 'react-dom/client';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import '../styles/index.css';


import Home from './components/Home.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));


const start = Date.now();


function render() {
  const seconds = Math.floor((Date.now() - start) / 1000);
  root.render(
    <React.StrictMode>
      <Home seconds={seconds} />
    </React.StrictMode>
  );
}


render();
setInterval(render, 1000);

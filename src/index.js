import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorChanger from './ColorChanger';
import HomePage from './home';
import TodoServer from './TodoServer';
import TodoApi from './TodoApi';
import PlaceHolderApi from './PlaceHolderApi';
import Calculator from './Calculator'
import Snapshot from './Snapshot';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Routes>
        <Route path="/todo" element={<App />}/>
      </Routes>
      <Routes>
        <Route path="/todoserver" element={<TodoServer />}/>
      </Routes>
      <Routes>
        <Route path="/todoapi" element={<TodoApi />}/>
      </Routes>
      <Routes>
        <Route path="/colorchanger" element={<ColorChanger/>}/>
      </Routes>
      <Routes>
        <Route path="/placeholderapi" element={<PlaceHolderApi />}/>
      </Routes>
      <Routes>
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
      <Routes>
        <Route path="/snapshot" element={<Snapshot/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

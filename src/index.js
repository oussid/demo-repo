import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Outline from './router_test/outline';
import Products from './router_test/products';
import Home from './router_test/home';
import About from './router_test/about';
import Product from './router_test/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Outline />}>
        <Route index element={<Home />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='products/:id' element={<Product />} ></Route>
        <Route path='about' element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

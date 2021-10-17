import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BlockFlix from './blockflix.js';
import {CartMoviesProvider} from "./context/cartmoviescontext";


ReactDOM.render(

  <React.StrictMode>
    <CartMoviesProvider>

      <BrowserRouter>

        <BlockFlix />

      </BrowserRouter>
      
    </CartMoviesProvider>

  </React.StrictMode>
  ,
  document.getElementById('root')
);

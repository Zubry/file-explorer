import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery.js';
import Sidebar from './components/sidebar.js';

ReactDOM.render(
  <div>
    <Sidebar/>
    <Gallery/>
  </div>,
  document.getElementById('root')
);

import React from 'react';
import Header from './header.js';
// import Footer from './footer.js';

import './style.css';

const layout = (props) => (
  <div className="layout_page">
    <Header />
    <React.Fragment>
      {props.children}
    </React.Fragment>
  </div>
);


export default layout;


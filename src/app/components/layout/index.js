import React from 'react';
import Header from './header.js';
// import Footer from './footer.js';

const layout = (props) => (
  <div className="layout_page">
    <Header />
    <React.Fragment>
      {props.children}
    </React.Fragment>
  </div>
);


export default layout;


import React from 'react';
import Header from './header.js';
import Footer from './footer.js';

const layout = (props) => (
  <div>
    <Header />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>
);


export default layout;


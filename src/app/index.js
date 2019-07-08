import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './page/home';
import CategoryFilter from './page/categoryFilter';

const app = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/:categoryFilter" component={CategoryFilter} />
  </Router>
);

export default app;
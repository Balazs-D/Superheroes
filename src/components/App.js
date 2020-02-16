import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './layout/Navbar';

import '../assets/scss/style.scss';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/home'></Route>
          <Route path='/library'></Route>
          <Route path='/game'></Route>
          <Route path='/credits'></Route>
        </Switch>
      </div>
    </Router>
  );
}

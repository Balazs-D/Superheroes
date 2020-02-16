import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './layout/Navbar';

import '../assets/scss/style.scss';

export default function App() {

 

  const doFetch = async () => {
    const res = await 
    axios
    .get('https://superheroapi.com/api/10218694070596012/1');
    
    const database = res.data;
    console.log(database)

  }


  return (
    <Router>
      <div>
        <Navbar />
        <button onClick={doFetch}>FETCH</button>
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

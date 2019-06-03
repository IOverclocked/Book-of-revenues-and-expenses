import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView';
import AboveView from 'views/AboveView/AboveView';
import DetailsView from 'views/DetailsView/DetailsView';
import './App.module.scss';

const App = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={HomeView} />
      <Route path="/above" component={AboveView} />
      <Route path="/details" component={DetailsView} />
    </>
  </BrowserRouter>
);

export default App;

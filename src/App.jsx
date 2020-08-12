import React from 'react';
import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './layout/home/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </BrowserRouter>
  );
}

export default App;

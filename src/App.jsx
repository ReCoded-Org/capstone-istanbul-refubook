import React from 'react';
import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './layout/home';
import About from './layout/about/Index';
import UserProfile from './layout/userProfile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/userProfile" component={UserProfile} />
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

import React from 'react';
import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './layout/home/Index';
import About from './layout/about/Index';
import Blog from './layout/blog/Index';
import Contact from './layout/contact';
import SignUp from './layout/signUp';
import LogIn from './layout/signIn';
import Navbar from '../src/components/navbar/Index';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;

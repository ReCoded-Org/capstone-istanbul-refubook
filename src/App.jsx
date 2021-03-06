import React from 'react';
import './styles/app.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import UserProfile from './layout/userProfile';
import Home from './layout/home/Index';
import About from './layout/about/Index';
import Blog from './layout/blog/Index';
import Contact from './layout/contact';
import SignUp from './layout/signUp/Index';
import LogIn from './layout/signIn/index';
import Navbar from '../src/components/navbar/Index';
import SingleBlogPage from '../src/components/singleBlogPage/index';
import Footer from '../src/components/footer/Footer';
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/singleblog/0" component={SingleBlogPage} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}
export default App;

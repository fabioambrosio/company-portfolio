import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Portifolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Admin from './admin/Admin';
import Login from './admin/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portifolio} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/contact' component={Contact} />

          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

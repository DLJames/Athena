import React, { Component } from 'react';
import BScroll from 'better-scroll';
import { HashRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Search from './pages/serach';
import Home from './pages/home';
import Detail from './pages/detail';

import './app.css';

class App extends Component {

  componentDidMount() {
    // this.initScroll();
  }

  render() {
    return (
      <div className="athena-app">
        <Router>
          <Header></Header>
          <div className="athena-wrapper">
            <Route path="/" exact component={Search} />
            <Route path="/search" exact component={Search} />
            <Route path="/search/:id" exact component={Search} />
            <Route path="/home" exact component={Home} />
            <Route path="/detail" exact component={Detail} />
          </div>
        </Router>
      </div>
    );
  }

  initScroll() {
    this.scroll = new BScroll(this.scrollView, {
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300
      },
      scrollbar: {
        fade: false,
        interactive: false
      }
    });
  }

  resize () {
    this.scroll.refresh();
  }
}

export default App;

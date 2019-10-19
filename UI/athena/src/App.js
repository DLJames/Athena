import React, { Component } from 'react';
import Header from './components/Header/Header';
import BScroll from 'better-scroll';

import './app.css';

class App extends Component {

  componentDidMount() {
    this.initScroll();
  }

  render() {
    return (
      <div className="athena-app">
        <Header></Header>
        <div className="athena-wraper wrapper" ref={(scroll) => {this.scrollView = scroll}}>
          <div className="athena-content">
            {new Array(80).fill(1).map((item,index)=>{
              return <div key={index}>content- {index}</div>
            })}
          </div>
        </div>
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

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import BScroll from 'better-scroll';

import './style.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'xiao ming'
    }
  }

  componentDidMount(){
    console.log('home > Mount')
    this.initScroll();
  }

  shouldComponentUpdate() {
    console.log('home > shouldComponentUpdate')
    return true;
  }
  
  componentWillUnmount(){
    console.log('home > Unmount')
  }

  render() {
    return (
      <div className="athena-home-wrapper wrapper" ref={(scroll) => {this.scrollView = scroll}}>
        <div className="athena-home-content">
          {new Array(80).fill(1).map((item,index)=>{
            return <div key={index}>content- {index}</div>
          })}
        </div>
      </div>
    );
  }

  handleClick() {
    this.setState(() => ({
      name: 'James'
    }))
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

export default Home;
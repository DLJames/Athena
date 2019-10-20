import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BScroll from 'better-scroll';


class Detail extends Component {

  componentDidMount(){
    console.log('detail Mount')
  }
  
  componentWillUnmount(){
    console.log('detail Unmount')
  }

  render() {
    return (
      <div><h3>detail~</h3>
        <Link to="/">go to search</Link>
        <br/>
        <Link to="/home">go to Home</Link>
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

export default Detail;
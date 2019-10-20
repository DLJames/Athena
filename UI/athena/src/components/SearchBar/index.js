import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BScroll from 'better-scroll';

import './style.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: '',
      fadein: '',
      contacts: [],
      contactList: [
        {
          id: '1001',
          name: 'James BaoNan',
          started: 1,
          company: "STE Athena",
          country: "China"
        },
        {
          id: '1004',
          name: 'Tom xx',
          started: 1,
          company: "Company ABC",
          country: "Canada"
        },
        {
          id: '1002',
          name: 'James Leborn',
          started: 0,
          company: "Company IST",
          country: "Germany"
        },
        {
          id: '1003',
          name: 'James King',
          started: 0,
          company: "Company UVW",
          country: "China"
        },
        {
          id: '1005',
          name: 'Tom YY',
          started: 0,
          company: "Company JPQ",
          country: "Japan"
        },
        {
          id: '1006',
          name: 'wang gang',
          started: 0,
          company: "Company ABC",
          country: "North America"
        },
        {
          id: '1007',
          name: 'wang hong',
          started: 0,
          company: "Company XYZ",
          country: "China"
        }
      ]
    }

    this.handleInputFocus =  this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
  }

  componentDidMount() {
    this.inputBar.focus();
  }

  render() {
    return (
      <div className="athena-search-bar">
        <input
          className=""
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          onClick={this.handleSearchClick}
          type="text"
          ref={(input) => {this.inputBar = input}}
          value={this.state.searchVal}
          placeholder="Search For a contact, company or email address" />
        <div className="athena-search-btn" onClick={this.handleSearchBtnClick}></div>
        {this.getSearchResult()}
      </div>
    )
  }

  getSearchResult() {
    return (
      <div className={"athena-search-result " + this.state.fadein}>
        <div className="athena-search-result-saveTag">Saved</div>
        {this.state.contacts.map((item) => {
          let dom;
          if(item.started) {
            dom = <div className="athena-icon-star-fill"></div>;
          }else {
            dom = <div className="athena-icon-search-button"></div>;
          }
          return (
            <Link to="/home" className="athena-search-result-item" key={item.id}>
              {dom}
              <div className="athena-search-result-content">
                <span>{item.name}</span>
                <span className="athena-icon-dot"></span>
                <span>{item.company}</span>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }

  handleInputFocus() {
    let { searchVal } = this.state;
    if(searchVal) {
      this.setState(() => ({
        fadein: 'fade-in'
      }));
    }
  }

  handleInputBlur() {
    this.setState(() => ({
      fadein: ''
    }));
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState((prevState) => {
      let result = [];
      let contactList = [...prevState.contactList];
      result = contactList.filter((item) => {
        let val = item.name + item.company + item.country;
        return val.toLowerCase().includes(value.toLowerCase());
      });

      return {
        contacts: result
      }
    });
    
    this.setState(() => ({
      searchVal: value,
      fadein: 'fade-in'
    }));
  }

  handleKeyUp(e) {
    if(e.keyCode === 13) {
      console.log('key=', e.keyCode)
    }
  }

  handleSearchClick(e) {
    e.stopPropagation();
  }

  handleSearchBtnClick(e) {
    // this.setState(() => ({
    //   searchVal: '',
    //   fadein: ''
    // }));
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

export default Search;
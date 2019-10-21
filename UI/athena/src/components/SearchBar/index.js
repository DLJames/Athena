import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
// import BScroll from 'better-scroll';

import './style.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: this.props.searchVal || '',
      fadein: '',
      contacts: [],
      contactList: [
        {
          id: '1001',
          name: 'James BaoNan',
          star: 1,
          company: "STE Athena",
          country: "China"
        },
        {
          id: '1004',
          name: 'Tom xx',
          star: 1,
          company: "Company ABC",
          country: "Canada"
        },
        {
          id: '1002',
          name: 'James Leborn',
          star: 0,
          company: "Company IST",
          country: "Germany"
        },
        {
          id: '1003',
          name: 'James King',
          star: 0,
          company: "Company UVW",
          country: "China"
        },
        {
          id: '1005',
          name: 'Tom YY',
          star: 0,
          company: "Company JPQ",
          country: "Japan"
        },
        {
          id: '1006',
          name: 'wang gang',
          star: 0,
          company: "Company ABC",
          country: "North America"
        },
        {
          id: '1007',
          name: 'wang hong',
          star: 0,
          company: "Company XYZ",
          country: "China"
        }
      ]
    }

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
    this.handleSearchDelClick = this.handleSearchDelClick.bind(this);
  }

  componentDidMount() {
    if (this.props.focus) {
      this.inputBar.focus();
    }
    // this.initScroll();
    // this.documentHandler = document.addEventListener('click', () => {
    //   this.setState(() => ({
    //     fadein: ''
    //   }));
    // });
  }

  componentWillUnmount() {
    // this.documentHandler = null;
  }

  render() {
    let _class = this.state.searchVal ? 'athena-search-bar-val' : ''
    return (
      <div className={"athena-search-bar " + _class} onClick={(e) => { e.stopPropagation(); }}>
        <input
          className=""
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          onClick={this.handleSearchClick}
          type="text"
          ref={(input) => { this.inputBar = input }}
          value={this.state.searchVal}
          placeholder="Search For a contact, company or email address" />
        <div className="athena-search-btn" onClick={this.handleSearchBtnClick}></div>
        <div className="athena-search-del" onClick={this.handleSearchDelClick}></div>
        {this.getSearchResult()}
      </div>
    )
  }

  getSearchResult() {
    return (
      <div className={"athena-search-result " + this.state.fadein}>
        <Scrollbars 
          autoHeight={true}
        >
          <div className="athena-search-result-savedCon">
            <div className="athena-search-result-saveTag">Saved</div>
            {
              this.state.contacts.filter((item) => {
                return item.star === 1;
              }).map((item) => {
                return (
                  <Link to="/home" className="athena-search-result-item" key={item.id}>
                    <div className="athena-icon-star-fill"></div>
                    <div className="athena-search-result-content">
                      <span>{item.name}</span>
                      <span className="athena-icon-dot"></span>
                      <span>{item.company}</span>
                    </div>
                  </Link>
                );
              })
            }
          </div>
          <div className="athena-search-result-searchCon">
            {
              this.state.contacts.filter((item) => {
                return item.star !== 1;
              }).map((item) => {
                return (
                  <Link to="/home" className="athena-search-result-item" key={item.id}>
                    <div className="athena-icon-search-button"></div>
                    <div className="athena-search-result-content">
                      <span>{item.name}</span>
                      <span className="athena-icon-dot"></span>
                      <span>{item.company}</span>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </Scrollbars>
      </div>
    )
  }

  handleInputFocus() {
    let { searchVal } = this.state;

    if (searchVal) {
      this.filterData(searchVal);
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

  filterData(contact) {
    this.setState((prevState) => {
      let result = [];
      let contactList = [...prevState.contactList];
      result = contactList.filter((item) => {
        let val = item.name + item.company + item.country;
        return val.toLowerCase().includes(contact.toLowerCase());
      });

      return {
        contacts: result
      }
    });
  }

  handleInputChange(e) {
    const value = e.target.value;

    this.filterData(value);
    this.setState(() => ({
      searchVal: value,
      fadein: 'fade-in'
    }));
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      console.log('key=', e.keyCode)
    }
  }

  handleSearchClick(e) {
    e.stopPropagation();
  }

  handleSearchBtnClick(e) {
    e.stopPropagation();
    this.setState(() => ({
      searchVal: '',
      fadein: ''
    }));
  }

  handleSearchDelClick(e) {
    e.stopPropagation();
    this.setState(() => ({
      searchVal: '',
      fadein: ''
    }));
  }

  // initScroll() {
  //   this.scroll = new BScroll(this.scrollView, {
  //     mouseWheel: {
  //       speed: 20,
  //       invert: false,
  //       easeTime: 300
  //     },
  //     scrollbar: {
  //       fade: false,
  //       interactive: false
  //     }
  //   });
  // }

  // resize() {
  //   this.scroll.refresh();
  // }

}

export default Search;
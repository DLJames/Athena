import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import * as Action from '../../store/actionCreators';
// import BScroll from 'better-scroll';

import './style.css';

const mapStateToProps = (state, ownProps) => {
  const { contactName, contactList } = state;
  const { focus } = ownProps;
  return {
    contactName,
    contactList,
    focus
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    setContactName(value) {
      const action = Action.setContactName(value);
      dispatch(action);
    }
  }
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadein: '',
      contacts: this.props.contactList,
      searchInputVal: this.props.contactName
    }

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
    this.handleSearchDelClick = this.handleSearchDelClick.bind(this);
  }

  componentWillMount() {
    console.log('searchBar componentWillMount...')
  }

  componentDidMount(){
    console.log('searchBar componentDidMount...')
  }

  componentWillUnmount() {
    console.log('searchBar componentWillUnmount...')
  }

  render() {
    const { contacts, searchInputVal } = this.state;
    let _class = searchInputVal ? 'athena-search-bar-delicon' : '';
    return (
      <div className={"athena-search-bar " + _class} onClick={(e) => { e.stopPropagation() }}>
        <input
          className=""
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          type="text"
          ref={(input) => { this.inputBar = input }}
          value={searchInputVal}
          placeholder="Search For a contact, company or email address" />
        <div className="athena-search-btn" onClick={this.handleSearchBtnClick}></div>
        {searchInputVal ? <div className="athena-search-del" onClick={this.handleSearchDelClick}></div> : ''}
        {this.getSearchResult(contacts)}
      </div>
    )
  }

  getSearchResult(contacts) {
    return (
      <div className={"athena-search-result " + this.state.fadein}>
        <Scrollbars 
          autoHeight={true}
        >
          <div className="athena-search-result-savedCon">
            <div className="athena-search-result-saveTag">Saved</div>
            {
              contacts.filter((item) => {
                return item.star === 1;
              }).map((item) => {
                return (
                  <Link 
                    onClick={() => {this.props.setContactName(item.name)}} 
                    to="/home" 
                    className="athena-search-result-item" 
                    key={item.id}>
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
              contacts.filter((item) => {
                return item.star !== 1;
              }).map((item) => {
                return (
                  <Link 
                    onClick={() => {this.props.setContactName(item.name)}} 
                    to="/home" 
                    className="athena-search-result-item" 
                    key={item.id}>
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
    this.showSearchResult();
  }

  filterData(contact) {
    this.setState(() => {
      let result = [];
      let _contactList = [...this.props.contactList];

      if(!contact) {
        return {
          contacts: _contactList
        }
      }

      result = _contactList.filter((item) => {
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
    this.setState(() => ({searchInputVal: value}));
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const value = this.state.searchInputVal;
      this.props.setContactName(value);
      this.hideSearchResult();
    }
  }

  handleSearchBtnClick() {
    const value = this.state.searchInputVal;
    this.props.setContactName(value);
    this.hideSearchResult();
  }

  handleSearchDelClick() {
    this.hideSearchResult();
  }

  showSearchResult() {
    this.filterData();
    this.setState(() => ({fadein: 'fade-in'}));
  }

  hideSearchResult() {
    this.setState(() => ({fadein: '', searchInputVal: ''}));
  }

}

export default connect(mapStateToProps, mapDisPatchToProps)(Search);
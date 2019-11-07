import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';

import logoImg from '../../assets/logo.svg';
import './style.css';

class Search extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('search page componentWillMount...')
  }

  componentDidMount(){
    console.log('search page componentDidMount...')
  }

  componentWillUnmount() {
    console.log('search page componentWillUnmount...')
  }

  render() {
    return (
      <div className="athena-search-wrapper">
        <img className="athena-search-logo" src={logoImg} />
        <div className="athena-search-content">
          <p className="athena-search-title">Welcome to Athena</p>
          <p className="athena-search-subtitle">Use the search bar to find a contact and view recent interactions.</p>
          <p className="athena-search-subtitle">You'll be searching contacts compiled from both internal and third <br/>party sources.</p>
          <p className="athena-search-subtitle">
            <a className="athena-search-learn" href="https://mtev2.w3-969.ibm.com/dsgb/knowledgebase/athena-contacts/" target="_blank">Learn more about our data sources</a>
          </p>
          <SearchBar key="search-bar-search"></SearchBar>
        </div>
      </div>
    );
  }

}

export default Search;
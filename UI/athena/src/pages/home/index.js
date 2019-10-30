import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import ContactItem from './components/ContactItem';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';

import './style.css';

const mapStateToProps = (state, ownProps) => {
  const { contactList } = state;
  return {
    contactList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount(){
    console.log('home > Mount')
  }

  shouldComponentUpdate() {
    console.log('home > shouldComponentUpdate')
    return true;
  }
  
  componentWillUnmount(){
    console.log('home > Unmount')
  }

  render() {
    const { contactList, } = this.props;
    const contactNum = contactList.length;
    const { contactName } = this.state;
    return (
      <div className="athena-home">
        <div className="athena-home-search">
          <SearchBar focus={false} searchVal={contactName}></SearchBar>
        </div>
        <div className="athena-home-info">
          <div>Showing {contactNum} results for <span className="athena-home-contact">{contactName}</span></div>
          <div>We've included results that are incomplete and possibly out of date.</div>
          <div className="athena-home-showFour"><span>Show 4 results instead</span></div>
        </div>
        <div className="athena-home-contactCon">
          <Scrollbars>
            <div className="athena-home-contactItemCon">
              {contactList.map((item)=>{
                return <ContactItem key={item.id} contactData={item}></ContactItem>
              })}
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import ContactItem from './components/ContactItem';
import { Scrollbars } from 'react-custom-scrollbars';

import './style.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contactName: 'James',
      contactList: [
        {
          id: '1001',
          name: 'James BaoNan',
          started: 1,
          company: "STE Athena",
          country: "China"
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
        }
      ]
    }

    this.handleClick = this.handleClick.bind(this);
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
    const contactNum = this.state.contactList.length;
    const contactName = this.state.contactName;
    return (
      <div className="athena-home">
        <div className="athena-home-search">
          <SearchBar focus={false} searchVal={this.state.contactName}></SearchBar>
        </div>
        <div className="athena-home-info">
          <div>Showing {contactNum} results for <span className="athena-home-contact">{contactName}</span></div>
          <div>We've included results that are incomplete and possibly out of date.</div>
          <div className="athena-home-showFour"><span>Show 4 results instead</span></div>
        </div>
        <div className="athena-home-contactCon">
          <Scrollbars>
            <div className="athena-home-contactItemCon">
              {this.state.contactList.map((item)=>{
                return <ContactItem key={item.id} contactData={item}></ContactItem>
              })}
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }

  handleClick() {
    this.setState(() => ({
      name: 'James'
    }))
  }

}

export default Home;
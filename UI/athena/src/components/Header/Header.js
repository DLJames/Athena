import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBackBtn: false
    }

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleUsrClick = this.handleUsrClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  render() {
    const { showBackBtn } = this.state;
    let headerLeftInfo;

    if(!showBackBtn) {
      headerLeftInfo = <div className="athena-header-title">Athena Contacts</div>
    }else {
      headerLeftInfo = (<div className="athena-header-backBtnCon">
        <Link className="athena-icon-go-button" to="/home" onClick={this.handleBackClick}></Link>
        <div className="athena-header-contact">{this.props.contact?'':'James'}</div>
      </div>);
    }

    return (
      <div className="athena-header">
        <div className="athena-header-info">{headerLeftInfo}</div>
        <div className="athena-header-opt">
          <div className="athena-header-opt-usr">
            <span className="athena-icon-user-login" onClick={this.handleUsrClick}></span>
          </div>
          <div className="athena-header-opt-menu">
            <span className="athena-icon-more-icons-graphic" onClick={this.handleMenuClick}></span>
          </div>
        </div>
      </div>
    );
  }

  handleBackClick() {
    console.log('handleBackClick')
  }

  handleUsrClick() {
    console.log('handleUsrClick....')
  }

  handleMenuClick() {
    console.log('handleMenuClick...')
  }

}

export default Header;
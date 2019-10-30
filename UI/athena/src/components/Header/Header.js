import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Action from '../../store/actionCreators';

import './style.css';

const mapStateToProps = (state, ownProps) => {
  const { showBackBtn, contactName } = state;

  return {
    showBackBtn,
    contactName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHeaderStatus() {
      const action = Action.changeHeaderStatus(false);
      dispatch(action);
    }
  }
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleUsrClick = this.handleUsrClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  render() {
    const { showBackBtn, contactName, changeHeaderStatus } = this.props;
    let headerLeftInfo;

    if(!showBackBtn) {
      headerLeftInfo = <div className="athena-header-title">Athena Contacts</div>
    }else {
      headerLeftInfo = (<div className="athena-header-backBtnCon">
        <Link className="athena-icon-go-button" to="/home" onClick={changeHeaderStatus}></Link>
        <div className="athena-header-contact">{contactName ? contactName : ''}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
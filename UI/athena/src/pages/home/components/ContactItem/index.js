import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeHeaderStatus } from '../../../../store/actionCreators';

import './style.css';

const mapStateToProps = (state, ownProps) => {
  const { contactData } = ownProps;
  return {
    contactData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleItemClick(name) {
      const data = {
        status: true,
        contactName: name
      }
      const action = changeHeaderStatus(data);
      dispatch(action);
    }
  }
}

const Contact = (props) => {
  const { name, started, company, country, job, mail, mobile, event, photo} = props.contactData;
  const { handleItemClick } = props;
  return (
    <Link to="/detail" onClick={() => {handleItemClick(name)}}>
      <div className="athena-contactItem">
        <div className="athena-card-head">
          <div className="athena-card-head-photo">
            <a>
              <img className="athena-usr-photo" src={photo} />
            </a>
          </div>
          <div className="athena-card-head-info">
            <div className="athena-usr-name">{name}</div>
            <div className="athena-usr-job">{job}</div>
            <div className="athena-usr-company">{company}</div>
          </div>
          <div className="athena-card-head-star"></div>
        </div>
        <div className="athena-card-col">
          <div className="athena-usr-mail">{mail}</div>
          <div className="athena-usr-phone">{mobile}</div>
          <div className="athena-usr-event">{event}</div>
          <div className="athena-viewall">View all interactions</div>
        </div>
      </div>
    </Link>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

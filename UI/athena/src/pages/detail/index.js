import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './style.css';

class Detail extends Component {

  componentDidMount() {
    console.log('detail Mount')
  }

  componentWillUnmount() {
    console.log('detail Unmount')
  }

  render() {
    return (
      <div className="athena-contact-detail">
        <div className="athena-detail-nav">
          <div>Consider waiting to contact. <a href="#" className="">Learn more</a></div>
        </div>
        <div className="athena-detail-body">
          <Scrollbars>
            <div className="athena-detail-body-info">
              <div className="athena-detail-body-info-profile">
                profile
              </div>
              <div className="athena-detail-body-info-timeline">
                timeline
              </div>
            </div>
            <div className="athena-detail-body-opt">
              <div className="athena-detail-body-network">James's network</div>
              <div className="athena-detail-body-interaction">Add interaction</div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default Detail;
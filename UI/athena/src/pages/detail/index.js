import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Content from './component/DetailContent';
import { connect } from 'react-redux';
import * as Action from '../../store/actionCreators';

import './style.css';

const mapStateToProps = (state, ownProps) => {
  const { currentContact } = state;
  return {
    currentContact
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentContact() {
      const action = Action.getCurrentContact();
      dispatch(action);
    }
  }
}

class Detail extends Component {

  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    console.log('props=', this.props)
    const { getCurrentContact } = this.props;
    getCurrentContact();
  }

  componentDidMount() {
    console.log('detail Mount')
  }

  componentWillUnmount() {
    console.log('detail Unmount')
  }

  render() {
    const styles = {
      base: {
        width: '75%',
        marginLeft: '100px',
        fontSize: 'inherit',
        fontWeight: 'inherit'
      },
      event: {
        base: {
          width: '20px',
          height: '1.5px',
          background: '#AEAEAE',
          left: '15px',
          top: '11px',
          border: 'none',
          borderRadius: '0'
        }
      }
    }
    const { currentContact } = this.props;
    let { eventList=[] } = currentContact;
    
    return (
      <div className="athena-contact-detail">
        <div className="athena-detail-nav">
          <div>Consider waiting to contact. <a href="#" className="">Learn more</a></div>
        </div>
        <div className="athena-detail-body">
          <Scrollbars>
            <div className="athena-detail-body-info">
              <div className="athena-detail-body-info-profile">
               Profile panel is developing...
              </div>
              <div className="athena-detail-body-info-timeline">
                <Timeline
                  lineColor={'#AEAEAE'}
                  lineStyle={{ border: 'none' }}
                  style={styles.base}
                >
                  {
                    eventList && eventList.map((item) => {
                      return (
                        <TimelineEvent
                          key={item.id}
                          title={<div className="athena-timeline-title"><span>{item.type_title}</span> <span className="athena-icon-dot"></span> <a href={item.link}>{item.area}</a></div>}
                          subtitle="Follow-up call, updated terms of service"
                          createdAt={<div className={"athena-createdAt " + (item.type === "phone" ? "athena-createdAt-phone" : "athena-createdAt-email")}>{item.date}</div>}
                          bubbleStyle={styles.event.base}
                          container="card"
                          cardHeaderStyle={{ backgroundColor: '#FFF', color: '#323232' }}
                          subtitleStyle={{ color: '#323232', paddingTop: '10px', fontWeight: 'bold' }}
                        >
                          <Content stuff={item.content}/>
                        </TimelineEvent>
                      );
                    })
                  }
                </Timeline>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
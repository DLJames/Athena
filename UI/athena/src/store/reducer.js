import * as Type from './actionTypes';

const defaultState = {
  showBackBtn: false,
  contactName: '',
  contactList: [
    {
      id: '1001',
      name: 'James BaoNan',
      started: 1,
      company: "STE Athena",
      country: "China",
      job: "Web developer",
      mail: "sbaonan@cn.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg'
    },
    {
      id: '1002',
      name: 'James Leborn',
      started: 0,
      company: "Company IST",
      country: "Germany",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Email sent on August 1, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg'
    },
    {
      id: '1003',
      name: 'James King',
      started: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg'
    },
    {
      id: '1004',
      name: 'James xiao bai',
      started: 1,
      company: "STE Athena",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg'
    },
    {
      id: '1005',
      name: 'James cai niao',
      started: 0,
      company: "Company IST",
      country: "Germany",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg'
    },
    {
      id: '1006',
      name: 'James da shen',
      started: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg'
    },
    {
      id: '1007',
      name: 'James woo',
      started: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg'
    }
  ]
};

export default (state = defaultState, action) => {
  const { type, value } = action;
  const newState = JSON.parse(JSON.stringify(state));

  // switch (type) {
  //   case Type.CHANGE_HEADER_STATUS: 
  //     return Object.assign({}, state, {
  //       showBackBtn: value
  //     });
  // }
  if(type === Type.CHANGE_HEADER_STATUS) {
    const { status, contactName } = value;
    newState.showBackBtn = status;
    newState.contactName = contactName ? contactName : '';
    return newState;
  }

  return state;
};
import * as Type from './actionTypes';

const defaultState = {
  showBackBtn: false,
  contactId: '',
  contactName: '',
  currentContact: {},
  contacts: [],
  contactList: [
    {
      id: '1001',
      name: 'James BaoNan',
      star: 1,
      company: "STE Athena",
      country: "China",
      job: "Web developer",
      mail: "sbaonan@cn.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: "https://w3.ibm.com/bluepages/images/profile.jpg",
      eventList: [{
        date: "Auguest 15",
        type: "phone",
        type_title: "Outbound Call",
        link: "https://reactjs.org/",
        area: "SalesConnect",
        title: "Follow-up call, updated terms of service",
        content: "Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!"
      },
      {
        date: "Auguest 10",
        type: "email",
        type_title: "Email (IBM Sent)",
        link: "https://reactjs.org/",
        area: "Unica",
        title: "Cloud and data platform",
        content: "Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!"
      },
      {
        date: "Auguest 8",
        type: "phone",
        type_title: "Outbound Call",
        link: "https://reactjs.org/",
        area: "SalesConnect",
        title: "Follow-up call, updated terms of service",
        content: "Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!"
      },
      {
        date: "Auguest 1",
        type: "phone",
        type_title: "Outbound Call",
        link: "https://reactjs.org/",
        area: "SalesConnect",
        title: "Follow-up call, updated terms of service",
        content: "Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!"
      }
    ]
    },
    {
      id: '1002',
      name: 'James Leborn',
      star: 0,
      company: "Company IST",
      country: "Germany",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Email sent on August 1, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
    },
    {
      id: '1003',
      name: 'James King',
      star: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
    },
    {
      id: '1004',
      name: 'James xiao bai',
      star: 1,
      company: "STE Athena",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
    },
    {
      id: '1005',
      name: 'James cai niao',
      star: 0,
      company: "Company IST",
      country: "Germany",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
    },
    {
      id: '1006',
      name: 'James da shen',
      star: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: [{
        date: "Auguest 15",
        type: "phone",
        type_title: "Outbound Call",
        link: "https://reactjs.org/",
        area: "SalesConnect",
        title: "Follow-up call, updated terms of service",
        content: "Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!"
      }]
    },
    {
      id: '1007',
      name: 'James woo',
      star: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
    },
    {
      id: '1008',
      name: 'Tom xx',
      star: 1,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
    },
    {
      id: '1009',
      name: 'wang gang',
      star: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
    },
    {
      id: '1010',
      name: 'wang hong',
      star: 0,
      company: "Company UVW",
      country: "China",
      job: "GTS, Delivery & Integrated Operations",
      mail: "ranujame@in.ibm.com",
      mobile: "91-8368554095",
      event: "Ticket opened on July 14, 2019",
      photo: 'https://w3.ibm.com/bluepages/images/profile.jpg',
      eventList: []
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
    const { status, contactName, contactId } = value;
    newState.showBackBtn = status;
    newState.contactName = contactName ? contactName : '';
    newState.contactId = contactId ? contactId : '';
    return newState;
  }

  if(type === Type.GET_CURRENT_CONTACT) {
    const { contactId } = state;
    newState.currentContact = newState.contactList.filter((item) => {
      return item.id === contactId;
    })[0];
    return newState;
  }

  if(type === Type.SET_CONTACT_NAME) {
    newState.contactName = value;
    newState.contacts = newState.contactList.filter((item) => {
      return item.name.includes(value);
    });
    return newState;
  }

  return state;
};
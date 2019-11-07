import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import * as Action from '../../store/actionCreators';

import './style.css';

const mapStateToProps = (state, ownProps) => {
  const { contactName, contactList } = state;
  const { focus } = ownProps;
  return {
    contactName,
    contactList,
    focus
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    setContactName(value) {
      const action = Action.setContactName(value);
      dispatch(action);
    }
  }
}

const Search = (props) => {
  const { contactList, contactName, setContactName} = props;
  const [fadein, setFadein] = useState('');
  const [contacts, setContacts] = useState(contactList);
  const [searchInputVal, setSearchInputVal] = useState(contactName);
  let history = useHistory();
  let _class = searchInputVal ? 'athena-search-bar-delicon' : '';
  let documentHandler = () => {
    clearDocumentHandler();
    setFadein('');
  };

  useEffect(() => {
    return function cleanup() {
      clearDocumentHandler();
    }
  });

  const getSearchResult = (_contacts) => {
    return (
      <div className={"athena-search-result " + fadein}>
        <Scrollbars 
          autoHeight={true}
        >
          <div className="athena-search-result-savedCon">
            <div className="athena-search-result-saveTag">Saved</div>
            {
              _contacts.filter((item) => {
                return item.star === 1;
              }).map((item) => {
                return (
                  <Link 
                    onClick={() => {setContactName(item.name)}} 
                    to="/home" 
                    className="athena-search-result-item" 
                    key={item.id}>
                      <div className="athena-icon-star-fill"></div>
                      <div className="athena-search-result-content">
                        <span>{item.name}</span>
                        <span className="athena-icon-dot"></span>
                        <span>{item.company}</span>
                      </div>
                  </Link>
                );
              })
            }
          </div>
          <div className="athena-search-result-searchCon">
            {
              _contacts.filter((item) => {
                return item.star !== 1;
              }).map((item) => {
                return (
                  <Link 
                    onClick={() => {setContactName(item.name)}} 
                    to="/home" 
                    className="athena-search-result-item" 
                    key={item.id}>
                      <div className="athena-icon-search-button"></div>
                      <div className="athena-search-result-content">
                        <span>{item.name}</span>
                        <span className="athena-icon-dot"></span>
                        <span>{item.company}</span>
                      </div>
                  </Link>
                )
              })
            }
          </div>
        </Scrollbars>
      </div>
    )
  }

  const handleInputClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
  }

  const handleInputFocus = (e) => {
    const value = e.target.value;

    document.addEventListener('click', documentHandler);
    filterData(value);
    showSearchResult();
  }

  const filterData = (contact) => {
    setContacts(() => {
      let result = [];
      let _contactList = [...contactList];

      if(!contact) {
        return _contactList;
      }
      result = _contactList.filter((item) => {
        let val = item.name + item.company + item.country;
        return val.toLowerCase().includes(contact.toLowerCase());
      });
      return result;
    });
  }

  const handleInputChange = (e) => {
    const value = e.target.value;

    filterData(value);
    setSearchInputVal(value);
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      setContactName(searchInputVal);
      hideSearchResult();
      goToHomePage();
    }
  }

  const handleSearchBtnClick = () => {
    setContactName(searchInputVal);
    hideSearchResult();
    goToHomePage();
  }

  const handleSearchDelClick = () => {
    hideSearchResult();
  }

  const goToHomePage = () => {
    clearDocumentHandler();
    history.push("/home");
  }

  const showSearchResult = () => {
    // filterData();
    setFadein('fade-in');
  }

  const hideSearchResult = () => {
    setFadein('');
    setSearchInputVal('');
  }

  const clearDocumentHandler = () => {
    document.removeEventListener('click', documentHandler);
  }

  return (
    <div className={"athena-search-bar " + _class} onClick={(e) => { e.stopPropagation() }}>
      <input
        onClick={handleInputClick}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        type="text"
        value={searchInputVal}
        placeholder="Search For a contact, company or email address" />
      <div className="athena-search-btn" onClick={handleSearchBtnClick}></div>
      {searchInputVal ? <div className="athena-search-del" onClick={handleSearchDelClick}></div> : ''}
      {getSearchResult(contacts)}
    </div>
  );
}

export default connect(mapStateToProps, mapDisPatchToProps)(Search);
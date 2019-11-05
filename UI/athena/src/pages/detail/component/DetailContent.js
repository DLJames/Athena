import React, { useState  } from 'react';

const Content = (props) => {
  const [show, setShow] = useState(true);
  const { stuff } = props;
  return (
    <div>
      <div className="athena-expend-detail-btn" onClick={() => {setShow(!show)}}>Expend detail</div>
      <div style={{display: show?'block':'none'}}>{stuff}</div>
    </div>
  );
}

export default Content;
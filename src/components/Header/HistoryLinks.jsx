import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, NavLink } from 'react-router-dom';

const HistoryLink = ({path, text}) => (
  <NavLink to={path}>{text}</NavLink>
)

const createLinksFromPath = paths => {
  
}

const HistoryLinks = props => {
  const history = useHistory();
  const [links, setLinks] = useState([]);
  
  useEffect(() => {
    const paths = history.location.pathname === '/' ? null : history.location.pathname.split('/');

    //console.log(links);
  }, [history.location.pathname])

  return (
    <div>
      {JSON.stringify(links)}
      {/* {links.map((item, index) => <item key={index}/>)} */}
    </div>
  );
};

HistoryLinks.propTypes = {
  
};

export default HistoryLinks;
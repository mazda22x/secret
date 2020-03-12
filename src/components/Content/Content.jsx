import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles(() => ({}))

const Content = props => {
  const classes = useStyle();
  return ( 
    <div>
      'Main'
      <div>
        <NavLink to="/user">Users Page</NavLink>
        <NavLink to="/user/gg">About Page</NavLink>
        <NavLink to="/contact">Contacts Page</NavLink>
      </div>
    </div>
  );
};

Content.propTypes = {
  id: PropTypes.number,
};

export default Content;
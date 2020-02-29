import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    aside: {
        minWidth: '256px',
    }
}))
const Menu = props => {
    const classess = useStyle();
    return (
        <aside className={classess.aside}>
            Menu
        </aside>
    );
};

Menu.propTypes = {
    id: PropTypes.number,
};

export default Menu;
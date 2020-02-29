import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    toolbar: {
        minHeight: '32px',
    }
}))

const Toolbar = props => {
    const classess = useStyle();
    return (
        <header className={classess.toolbar}>
            Toolbar
        </header>
    );
};

Toolbar.propTypes = {
    id: PropTypes.number,
};

export default Toolbar;
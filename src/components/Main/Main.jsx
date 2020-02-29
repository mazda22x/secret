import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    main: {
        display: 'flex',
        flex: '1 1 auto',
    }
}))

const Main = props => {
    const classess = useStyle();
    return (
        <main className={classess.main}>
            Main
        </main>
    );
};

Main.propTypes = {
    id: PropTypes.number,
};

export default Main;
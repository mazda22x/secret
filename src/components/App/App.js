import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store' ;
import { theme } from '../../assets/themes/default';

import {
  ThemeProvider, makeStyles,
} from '@material-ui/core';

import './App.css';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Toolbar from '../Toolbar/Toolbar';

const useStyle = makeStyles(() => ({
  column: {
    flexDirection: 'column',
    display: 'flex',
    flex: '1 1 auto',
    //width: '-webkit-fill-available;'
  }
}))

function App(props) {
  const classess = useStyle();

  console.log('app props', props)
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Menu />
          <div className={classess.column}>
            <Toolbar />
            <Main />
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

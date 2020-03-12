import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import theme from "../../assets/themes/default";

import { ThemeProvider, makeStyles, CssBaseline } from "@material-ui/core";

import "./App.css";
import Content from "../Content/Content";
import Navigator from "../Navigator/Navigator";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";

const drawerWidth = 256;

const useStyle = makeStyles(() => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  app: {
    flexDirection: "column",
    display: "flex",
    flex: "1"
  },
  main: {
    flex: 1,
    padding: theme.spacing(1, 1)
  }
}));

function App(props) {
  const classes = useStyle();

  console.log("app props", props);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <div className="App">
            <nav className={classes.drawer}>
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </nav>
            <div className={classes.app}>
              <Header />
              <main className={classes.main}>
                <Content />
              </main>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

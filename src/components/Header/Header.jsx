import React from "react";
import PropTypes from "prop-types";
import { makeStyles, AppBar, Toolbar, Grid } from "@material-ui/core";
import HistoryLinks from "./HistoryLinks";

const useStyle = makeStyles(() => ({
  toolbar: {
    minHeight: "32px"
  }
}));

const Header = props => {
  const classes = useStyle();
  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Toolbar>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <HistoryLinks />
          </Grid>
          <Grid item xs/>
          <Grid item>
            toolbar
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  id: PropTypes.number
};

export default Header;

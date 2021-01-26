import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {  
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Country Info App
          </Typography>
          <Button color="inherit" startIcon={<GitHub />} href='https://github.com/noobie-007'>github</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

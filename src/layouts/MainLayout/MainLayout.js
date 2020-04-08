// Core
import React, { useState, useCallback } from 'react';
// Hooks
import makeStyles from '@material-ui/core/styles/makeStyles';
// Components
import AppBar from '00-components/AppBar';
// Styles
import style from './MainLayout.style';


const useStyles = makeStyles(style, {
  name: 'MainLayout',
});

const MainLayout = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => (setOpen(true)), []);

  return (
    <div className={classes.root}>
      <AppBar open={open} setOpen={handleOpen} className={classes.appBar} />
      <div className={classes.children}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

// Core
import React from 'react';
import clsx from 'clsx';
// Hooks
import makeStyles from '@material-ui/core/styles/makeStyles';
// Components
import MuiAppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
// Constants
import PATHS from '08-constants/paths/paths';
// Styles
import style from './AppBar.style';


const useStyles = makeStyles(style, { name: 'AppBar' });

function AppBar({ className, ...restProps }){
  const classes = useStyles(restProps);
  return (
    <MuiAppBar position="static" className={clsx(classes.root, className)}>
      <Typography variant="h6">
        <Link to={PATHS.LIST} className={classes.titleHeader}>List and Defail</Link>
      </Typography>
    </MuiAppBar>
  );
}

export default AppBar;

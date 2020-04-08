// Core
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
// Hooks
import makeStyles from '@material-ui/core/styles/makeStyles';
// Components
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
// Icons
import IconSearch from '@material-ui/icons/Search';
import IconClose from '@material-ui/icons/Close';
// Styles
import style from './InputSearch.style';


const useStyles = makeStyles(style, { name: 'InputSearch' });

function InputSearch({
  value,
  name,
  onClear,
  onChange,
  onSubmit,
  hasChanged = false,
  isLoading = false,
  disabledButton = false,
  ...restProps
}) {
  const classes = useStyles(restProps);

  const handleClickButton = useCallback((evt) => {
    if(hasChanged){
      if(evt.screenX !== 0 && evt.screenY !== 0){
        onClear(evt);
      } else {
        onSubmit(evt);
      }
    }
  }, [hasChanged, onClear, onSubmit]);

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <input
          value={value}
          name={name}
          type="text"
          onChange={onChange}
          className={classes.input}
          placeholder="Search"
          aria-label="input"
          {...restProps} />
        <span className={classes.divider} />
        {isLoading ? <CircularProgress /> :
          <IconButton
            type={hasChanged ? 'submit' : 'button'}
            onClick={handleClickButton}
            className={classes.button}
            color="primary"
            disabled={disabledButton}
            aria-label="button"
          >
            {hasChanged ? <IconClose />: <IconSearch />}
          </IconButton>}
      </form>
    </div>
  );
}

InputSearch.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSubmit: PropTypes.func,
  hasChanged: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabledButton: PropTypes.bool,
};

export default InputSearch;

// Core
import React, { useState, useCallback, useMemo } from 'react';
import clsx from 'clsx';
// Hooks
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Components
import Card from './Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import InputSearch from '00-components/InputSearch';
// Icons
import SortIcon from '@material-ui/icons/Sort';
// Side Effects
import { searchPokemons } from '05-sideEffects/search';
// Utils
import { sortBy } from '07-utils/sort';
import { formatUrl } from '07-utils/paths';
// Constants
import PATHS from '08-constants/paths/paths';
// Styles
import style from './List.style';


const useStyles = makeStyles(style, { name: 'List' });

function hasChanged(value){
  return value.length > 0;
}

const getSearchsSelectors = (state) => state.search.data;
const getTypeSearchsSelectors = (state) => state.search.types;
const getLoadingSearchsSelectors = (state) => state.search.loading;

function List() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const searchs = useSelector(getSearchsSelectors);
  const types = useSelector(getTypeSearchsSelectors);
  const isLoading = useSelector(getLoadingSearchsSelectors);

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [ascend, setAscend] = useState(true);

  const handleSearchChange = useCallback((evt) => {
    setSearch(evt.target.value);
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearch('');
  }, []);

  const handleTypeFilterChange = useCallback((evt) => {
    setTypeFilter(evt.target.value);
  }, []);

  const handleAscendClick = useCallback(() => {
    setAscend(prev => !prev);
  }, []);

  const list = useMemo(() => {
    const sort = sortBy('id', ascend);
    if(typeFilter === ''){
      return sort(searchs);
    }
    return sort(searchs.filter((pokemon) => pokemon.types.indexOf(typeFilter) !== -1));
  }, [ascend, searchs, typeFilter]);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    dispatch(searchPokemons(search));
  }, [dispatch, search]);

  const handleCardClick = useCallback((_, id) => {
    history.push(formatUrl(PATHS.POKEMON, { id }));
  }, [history]);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.inputContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <InputSearch
              value={search}
              hasChanged={hasChanged(search)}
              onChange={handleSearchChange}
              onClear={handleSearchClear}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField
              select
              fullWidth
              label="Type"
              variant="outlined"
              value={typeFilter}
              disabled={isLoading}
              onChange={handleTypeFilterChange}
            >
              <MenuItem value='' key={0}><em>None</em></MenuItem>
              {types.map((value) => <MenuItem value={value} key={value}>{value}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={6} md={2}>
            Sort:
            <IconButton disabled={isLoading} onClick={handleAscendClick} className={clsx({ [classes.rotate]: ascend })} ><SortIcon /></IconButton>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={classes.cardContainer}>
        {list.map((pokemon) => <Card id={pokemon.id} key={pokemon.id} name={pokemon.name} onClick={handleCardClick} />)}
      </Container>
    </div>
  );
}

export default List;

// Core
import React, { useEffect } from 'react';
// Hooks
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
// Side Effects
import { fetchPokemon } from '05-sideEffects/pokemon';
// Constants
import PATHS from '08-constants/paths/paths';
// Styles
import style from './Pokemon.style';


const getPokemonByIdSelector = (idPokemon) => (store) => store.pokemon.data[idPokemon] || {};

const useStyles = makeStyles(style, { name: 'Pokemon' });

function Pokemon() {
  const idPokemon = Number(useParams().id);
  const pokemon = useSelector(getPokemonByIdSelector(idPokemon));

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(idPokemon));
  }, [idPokemon, dispatch]);

  if(!pokemon.id) return null;

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.container}>
        <div className={classes.imgContainer}>
          <img
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            className={classes.image}
          />
        </div>
        <div className={classes.descriptionContainer}>
          <Typography variant="h3" className={classes.id}>#{pokemon.id}</Typography>
          <Typography variant="h2" className={classes.name}>
            {pokemon.name}
          </Typography>
        </div>
        <div className={classes.dataContainer}>
          <ul>
            <li>{`Speed ${pokemon.stats[0].base_stat}`}</li>
            <li>{`Special Defense ${pokemon.stats[1].base_stat}`}</li>
            <li>{`Special Attack ${pokemon.stats[1].base_stat}`}</li>
            <li>{`Defense ${pokemon.stats[2].base_stat}`}</li>
            <li>{`Attack ${pokemon.stats[3].base_stat}`}</li>
            <li>{`HP ${pokemon.stats[4].base_stat}`}</li>
          </ul>
        </div>
      </Paper>
      <Paper className={classes.footer}>
        <Link className={classes.footerLink} to={PATHS.LIST}>Back</Link>
      </Paper>
    </Container>
  );
}

export default Pokemon;

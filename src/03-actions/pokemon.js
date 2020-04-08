// Actions Types
import {
  POKEMON_FETCH,
  POKEMON_FETCH_SUCCESS,
  POKEMON_FETCH_FAIL,
} from '03-actions/types/pokemon';


export const fetchPokemon = () => ({
  type: POKEMON_FETCH,
});

export const fetchPokemonSuccess = (pokemon) => ({
  type: POKEMON_FETCH_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonFail = (errors) => ({
  type: POKEMON_FETCH_FAIL,
  payload: errors,
});

// Actions Types
import {
  SEARCH_POKEMONS,
  SEARCH_POKEMONS_SUCCESS,
  SEARCH_POKEMONS_FAIL,
} from '03-actions/types/search';


export const searchPokemons = (input) => ({
  type: SEARCH_POKEMONS,
  payload: input,
});

export const searchPokemonsSuccess = (result) => ({
  type: SEARCH_POKEMONS_SUCCESS,
  payload: result,
});

export const searchPokemonsFail = (error) => ({
  type: SEARCH_POKEMONS_FAIL,
  payload: error,
});

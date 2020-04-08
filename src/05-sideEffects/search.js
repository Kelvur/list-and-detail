// Actions
import {
  searchPokemons as searchPokemonsAction,
  searchPokemonsSuccess,
  searchPokemonsFail,
} from '03-actions/search';
// Services
import {
  searchPokemons as searchPokemonsService,
} from '04-services/search';
// Utils
import {
  buildSimpleSideEffect,
} from './utils';


export const searchPokemons = buildSimpleSideEffect(
  searchPokemonsService,
  searchPokemonsAction,
  searchPokemonsSuccess,
  searchPokemonsFail,
);

// Actions
import {
  fetchPokemon as fetchPokemonAction,
  fetchPokemonSuccess,
  fetchPokemonFail,
} from '03-actions/pokemon';
// Services
import { fetchPokemon as fetchPokemonService } from '04-services/pokemon';
// Utils
import {
  buildSimpleSideEffect,
} from './utils';


export const fetchPokemon = buildSimpleSideEffect(
  fetchPokemonService,
  fetchPokemonAction,
  fetchPokemonSuccess,
  fetchPokemonFail,
);

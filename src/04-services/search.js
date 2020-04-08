// Core
import { get } from './api';

// cards?setCode=base1&name=b
export const searchPokemons = (search) => get(
  '/cards',
  {
    setCode: 'base1',
    hp: 'gt0',
    name: search,
  },
  undefined,
  'https://api.pokemontcg.io/v1',
);


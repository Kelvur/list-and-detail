// Utils
import { buildCases, switchCases } from './reducerBuilder';
import { loadingTrue, loadingFalse } from './reducerCases';
// Action Types
import {
  SEARCH_POKEMONS,
  SEARCH_POKEMONS_SUCCESS,
  SEARCH_POKEMONS_FAIL,
} from '03-actions/types/search';


function parseSearch(payload){
  let allTypes = {};
  const data = payload.map(({ nationalPokedexNumber, name, types }) => {
    types.forEach((type) => allTypes = { ...allTypes, [type]: true });
    return {
      id: nationalPokedexNumber,
      name,
      types,
    };
  });
  return {
    data,
    types: Object.keys(allTypes),
  };
}

const initialState = {
  loading: false,
  data: [],
  types: [],
};

const cases = buildCases({
  [SEARCH_POKEMONS]: loadingTrue,
  [SEARCH_POKEMONS_SUCCESS]: (state, payload) => ({ ...state, loading: false, ...parseSearch(payload.cards) }),
  [SEARCH_POKEMONS_FAIL]: loadingFalse,
});

export default (state = initialState, action) => {
  return switchCases(state, action, cases);
};

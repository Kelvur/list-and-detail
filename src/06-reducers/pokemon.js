// Utils
import { buildCases, switchCases } from './reducerBuilder';
import { loadingTrue, loadingFalse } from './reducerCases';
// Action Types
import {
  POKEMON_FETCH,
  POKEMON_FETCH_SUCCESS,
  POKEMON_FETCH_FAIL,
} from '03-actions/types/pokemon';


const initialState = {
  loading: false,
  data: {},
};

const cases = buildCases({
  [POKEMON_FETCH]: loadingTrue,
  [POKEMON_FETCH_SUCCESS]: (state, payload) => ({ ...state, loading: false, data: { ...state.data, [payload.id]: payload } }),
  [POKEMON_FETCH_FAIL]: loadingFalse,
});

export default (state = initialState, action) => {
  return switchCases(state, action, cases);
};

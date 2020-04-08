// Reducer Logic
import {
  loadingTrue,
  loadingFalse,
} from './reducerCases';


describe('reducerCases', () => {
  test('loadingTrue should return a object with the key loading to true', () => {
    const state = {
      name: 'John Cleese',
    };

    const newState = loadingTrue(state);

    expect(newState.name).toBe('John Cleese');
    expect(newState.loading).toBe(true);
  });

  test('loadingFalse should return a object with the key loading to false', () => {
    const state = {
      name: 'John Cleese',
    };

    const newState = loadingFalse(state);

    expect(newState.name).toBe('John Cleese');
    expect(newState.loading).toBe(false);
  });

});

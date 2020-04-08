/* eslint-disable import/first */
// Core
import React, { Suspense, StrictMode } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Components
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '00-components/ThemeProvider';
// Pages
const List = React.lazy(() => import('02-pages/List'));
const Pokemon = React.lazy(() => import('02-pages/Pokemon'));
// Layouts
import MainLayout from 'layouts/MainLayout';
// Constants
import PATHS from '08-constants/paths/paths';
// Reducers
import rootReducer from '06-reducers';


const COMPONENT_PATHS = [{
  Component: List,
  path: PATHS.LIST,
}, {
  Component: Pokemon,
  path: PATHS.POKEMON,
}];

const createReduxStore = () => {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if (typeof global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
};

function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <StoreProvider store={createReduxStore()}>
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              {COMPONENT_PATHS.map(({ path, Component }) => (
                <Route path={path} exact key={path}>
                  <MainLayout>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Component />
                    </Suspense>
                  </MainLayout>
                </Route>
              ))}
              <Redirect to={PATHS.LIST} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StoreProvider>
    </StrictMode>
  );
}

export default App;

import { createStore, applyMiddleware,compose } from 'redux';
import thunk  from 'redux-thunk';
import  reducer  from './../reducers/index';

const inicialState = {
  city: "Buenos Aires,ar"

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

export const store = createStore(reducer,inicialState,
  composeEnhancers(applyMiddleware((thunk)))
);
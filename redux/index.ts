import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import counterReducers from './counter/reducers';
import InitialState from './initialState'

//Store'u state veri tabanı gibi düşünebiliriz. State yönetimi
//Combine bir araya getirmek demek. Birleştirmek demek.
//Tüm Stateleri birleştirir ve istediğimiz componente kullanabiliriz.

export const reducer = combineReducers<InitialState>({
    counterReducers
});

const configureStore = (initialState?: InitialState) =>
    createStore(
        reducer,
        initialState,
        applyMiddleware(logger)
    );

const store = configureStore();

export default store;
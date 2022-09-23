import { legacy_createStore } from 'redux';
import reducer from './reducers/counterReducer';

export const store = legacy_createStore(reducer);
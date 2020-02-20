import {createStore} from 'redux';
import reducer from './reducers/Reducers';

export const Store = createStore(reducer);

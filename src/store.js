import { createStore } from 'redux';
import itemsReducer from './itemsReducer';

const store = createStore(itemsReducer);

export default store;

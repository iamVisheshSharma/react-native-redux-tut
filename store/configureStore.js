import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({count: counterReducer});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
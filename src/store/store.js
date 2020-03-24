import { createStore, combineReducers, applyMiddleware } from 'redux';
import todos from '../reducers/todos';
import lists from '../reducers/lists';
import idAssigner from '../middleware/id_assigner';
import storage from '../middleware/storage';

export default createStore(
  combineReducers({
    todos,
    lists
  }),
  applyMiddleware(
    idAssigner,
    // storage,
  ),
);

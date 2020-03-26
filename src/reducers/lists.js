import { constants } from '../actions/lists';
import _ from 'lodash';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_LIST'):
      const newList = {
        ...action.payload,
      }
      return [...state, newList];

    case constants.get('CREATE_TODO'):
      state[0].todos.push(action.payload);
      return state; 

    case constants.get('MARK_TODO_DONE'):
      _.find(state[0].todos, {id: action.payload.todoId}).done = !_.find(state[0].todos, {id: action.payload.todoId}).done;
      return state;

    case constants.get('DELETE_TODO'):
      state[0].todos = state[0].todos.filter(item => item.id !== action.payload.todoId);
      return state;

    default:
      return state;
  }
  return state;
}

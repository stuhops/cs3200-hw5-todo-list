import { constants } from '../actions/lists';
import _ from 'lodash';
const initialState = []

export default function(state = initialState, action) {
  let newState;
  switch (action.type) {
    case constants.get('CREATE_LIST'):
      const newList = {
        ...action.payload,
      }
      return [...state, newList];

    case constants.get('CREATE_TODO'):
      newState = _.cloneDeep(state);
      newState[0].todos.push(action.payload);
      return newState; 

    case constants.get('MARK_TODO_DONE'):
      newState = _.cloneDeep(state);
      _.find(newState[0].todos, {id: action.payload.todoId}).done = !_.find(newState[0].todos, {id: action.payload.todoId}).done;
      return newState;

    case constants.get('MODIFY_LIST'):
      newState = _.cloneDeep(state);
      let modified = newState.filter(list => list.id === action.payload.idToMod);
      modified[0].title = action.payload.title;
      modified[0].icon = action.payload.icon;
      newState = newState.filter(list => list.id !== action.payload.idToMod);
      return [...newState, modified[0]];

    case constants.get('DELETE_LIST'):
      newState = _.cloneDeep(state);
      newState = newState.filter(list => list.id !== action.payload.listId);
      return newState;

    case constants.get('DELETE_TODO'):
      newState = _.cloneDeep(state);
      newState[0].todos = newState[0].todos.filter(item => item.id !== action.payload.todoId);
      return newState;


    default:
      return state;
  }
  return state;
}

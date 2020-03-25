import { constants } from '../actions/lists';
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

    default:
      return state;
  }
  return state;
}

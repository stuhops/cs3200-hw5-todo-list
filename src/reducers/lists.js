import { constants } from '../actions/lists';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_LIST'):
      const newList = {
        ...action.payload,
      }
      return [...state, newList];
    default:
      return state;
  }
  return state;
}

import Constants from './constants'

export const constants = new Constants({
  CREATE_LIST: 'CREATE_LIST',
  CREATE_TODO: 'CREATE_TODO',
  GET_LISTS: 'GET_LISTS',
});

export const createList = (title, icon) => ({
  type: constants.get('CREATE_LIST'),
  payload: {
    title,
    icon,
    todos: [],
  }
});

export const createTodo = (title, parentId) => ({
  type: constants.get('CREATE_TODO'),
  payload: {
    title,
    done: false,
    parentId,
  }
})

export const getLists = () => ({
  type: constants.get('GET_LISTS'),
})

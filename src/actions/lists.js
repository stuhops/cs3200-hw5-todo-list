import Constants from './constants'

export const constants = new Constants({
  CREATE_LIST: 'CREATE_LIST',
  CREATE_TODO: 'CREATE_TODO',

  MARK_TODO_DONE: 'MARK_TODO_DONE',

  DELETE_LIST: 'DELETE_LIST',
  DELETE_TODO: 'DELETE_TODO',

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
});

export const markTodoDone = (todoId) => ({
  type: constants.get('MARK_TODO_DONE'),
  payload: {
    todoId,
  }
});

export const deleteList = (listId) => ({
  type: constants.get('DELETE_LIST'),
  payload: {
    listId,
  }
});

export const deleteTodo = (todoId) => ({
  type: constants.get('DELETE_TODO'),
  payload: {
    todoId,
  }
});

export const getLists = () => ({
  type: constants.get('GET_LISTS'),
})

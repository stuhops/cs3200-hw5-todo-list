import Constants from './constants'

export const constants = new Constants({
  CREATE_LIST: 'CREATE_LIST',
  GET_LISTS: 'GET_LISTS',
});

export const createList = (title, icon) => ({
  type: constants.get("CREATE_LIST"),
  payload: {
    title,
    icon
  }
});

export const getLists = () => ({
  type: constants.get('GET_LISTS'),
})

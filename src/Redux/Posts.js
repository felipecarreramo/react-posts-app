import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  items: [],
})

export const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_POST':
      return state.merge({ items: [...state.items, action.post] })
    default:
      return state
  }
}

export const actions = {
  addPost: function (post) {
    return {
      type: 'ADD_POST',
      post,
    }
  },
}

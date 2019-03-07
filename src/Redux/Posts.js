import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  items: [],
})

export const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_POST':
      return state.merge({ items: [...state.items, action.post] })
    case 'SUCCESS_FETCH_POSTS':
      return state.merge({ items: [...state.items, ...action.posts] })
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
  fetchPosts: function() {
    return {
      type: 'FETCH_POSTS'
    }
  },
  failedToFetchPosts: function() {
    return {
      type: 'FAILED_TO_FETCH_POSTS'
    }
  },
  successFetchPosts: function(posts) {
    return {
      type: 'SUCCESS_FETCH_POSTS',
      posts
    }
  }
}

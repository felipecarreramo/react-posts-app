import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  items: [],
})

export const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}

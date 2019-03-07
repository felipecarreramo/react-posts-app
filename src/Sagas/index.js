import { all, takeLatest } from 'redux-saga/effects'

import { getPostsSaga } from './Posts'

export default function * root () {
  yield takeLatest('FETCH_POSTS', getPostsSaga)
}

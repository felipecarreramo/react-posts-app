import { call, put } from 'redux-saga/effects'
import { getPosts } from '../Services/Posts'

export function * getPostsSaga(action) {
  const response = yield call(getPosts)
  console.log(response)
}

import { call, put } from 'redux-saga/effects'
import { getPosts } from '../Services/Posts'
import { actions as PostsActions } from '../Redux/Posts'

export function * getPostsSaga(action) {
  const response = yield call(getPosts)
  if (!response.ok) {
    return yield put( PostsActions.failedToFetchPosts() )
  }

  yield put( PostsActions.successFetchPosts(response.data) )
}

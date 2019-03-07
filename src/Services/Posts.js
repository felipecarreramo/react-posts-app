import api from './'

export function getPosts(email, password) {
  return api.get('posts')
}

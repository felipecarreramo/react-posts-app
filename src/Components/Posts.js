import React, { Component } from 'react'

export default class Posts extends Component {

  render() {

    let listOfPosts = this.props.items.map( (post, idx) => (
      <div key={ idx }>
        <div> Post #{idx + 1} </div>
        <div>
          <div>Title</div>
          <div> { post.title } </div>
        </div>
        <div>
          <div>Body</div>
          <div> { post.body } </div>
        </div>
      </div>
    ))

    return (
      <div>
        { listOfPosts }
      </div>
    )
  }

}

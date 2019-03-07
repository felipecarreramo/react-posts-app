import React, { Component } from 'react'

export default class NewPost extends Component {

  state = {
    newPostTitle: "",
    newPostBody: "",
  }

  createNewPost() {
    let post = {
      title: this.state.newPostTitle,
      body: this.state.newPostBody
    }

    this.props.onReady(post)

  }

  render() {
    return (
      <div>
        <div>New Post</div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={ this.state.newPostTitle }
              onChange={ event => this.setState({ newPostTitle: event.target.value }) } />
          </div>
          <div>
            <input
              type="text"
              placeholder="Body"
              value={ this.state.newPostBody }
              onChange={ event => this.setState({ newPostBody: event.target.value }) } />
          </div>
          <div>
            <button
              onClick={ () => this.createNewPost() }>
              New Post
            </button>
          </div>
        </div>
      </div>
    )
  }

}

import React, { Component } from 'react';
import './App.css';
import NewPost from './Components/NewPost';
import { connect } from 'react-redux';
import { actions as PostsActions } from './Redux/Posts'

class App extends Component {

  state = {
    post: null
  }

  createNewPost(post) {
    this.props.createNewPost(post)
  }

  render() {

    let listOfPosts = this.props.posts.map( (post, idx) => (
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
      <div className="App">
        <NewPost onReady={ post => this.createNewPost(post) } />
        <div>
          <div> Posts: </div>
          { listOfPosts }
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    posts: state.posts.items,
  }
}

let mapDispatchToProps = dispatch => {
  return {
    createNewPost: post => dispatch( PostsActions.addPost(post) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

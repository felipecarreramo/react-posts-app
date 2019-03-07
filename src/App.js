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
    console.log('Posts: ', this.props.posts)
    return (
      <div className="App">
        <NewPost onReady={ post => this.createNewPost(post) } />
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

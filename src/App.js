import React, { Component } from 'react';
import './App.css';
import NewPost from './Components/NewPost';
import Posts from './Components/Posts';
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

    return (
      <div className="App">
        <NewPost onReady={ post => this.createNewPost(post) } />
        <div>
          <div> Posts: </div>
          <Posts items={this.props.posts} />
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

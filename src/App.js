import React, { Component } from 'react';
import './App.css';
import NewPost from './Components/NewPost';

class App extends Component {

  state = {
    post: null
  }

  createNewPost(post) {
    console.log(post)
  }

  render() {
    return (
      <div className="App">
        <NewPost onReady={ post => this.createNewPost(post) } />
      </div>
    );
  }
}

export default App;

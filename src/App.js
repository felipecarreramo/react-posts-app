import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    newPostTitle: "",
    newPostBody: "",
  }

  createNewPost() {
    let post = {
      title: this.state.newPostTitle,
      body: this.state.newPostBody
    }

    console.log(post)
  }

  render() {
    return (
      <div className="App">

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
    );
  }
}

export default App;

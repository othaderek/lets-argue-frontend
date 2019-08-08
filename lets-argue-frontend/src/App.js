import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then( res => res.json())
    .then( postObj => this.setState({posts: postObj}))
  }

  componentDidUpdate(){
    let state = this.state.posts
  }

  state = {
    posts: []
  }

  render () {

    console.log(this.state.posts);
    const postStuff = this.state.posts.map( post => {
      return (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <p>{post.comments.map( comment => comment.body )}</p>
        </div>
      )
    })

    return(
      <div>
        {postStuff}
      </div>
    )

  }
}

export default App;

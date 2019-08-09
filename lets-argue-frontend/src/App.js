import React from 'react'
import PropTypes from 'prop-types'
import Header from './Layouts/Header'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import ProfilePage from './ProfilePage'

class App extends React.Component {
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/posts')
  //   .then( res => res.json())
  //   .then( postObj => this.setState({posts: postObj}))
  // }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/users/1")
    .then( res => res.json())
    .then( )
  }

  componentDidUpdate(){
    // let state = this.state.posts
  }

  state = {
    posts: [],
    page: ""
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

        <Header />
        <LoginPage />
        <SignUpPage />
        <ProfilePage />
      </div>
    )

  }
}

export default App;

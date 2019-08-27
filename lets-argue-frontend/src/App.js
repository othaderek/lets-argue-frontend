import React from 'react'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import ProfilePage from './ProfilePage'
import EditUserPage from './EditUserPage'
import PostView from './PostView'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  state={
    username: "",
    password: "",
    currentUser: [],
    currentPost: []
  }

  // When user logs in, this makes POST request and sets state to currentUser
  // then if the response contains a token save the token to localStorage
  // pushes to profile url in router.
  newUserSignIn = (newUser) => {
    this.setState({currentUser: newUser})

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token){
        localStorage.token = data.token
        this.props.history.push('/profile')
      }
    })

  }

  postHandle = (postObj) => {
    this.setState({currentPost: postObj})
    this.props.history.push('/post')
  }

  handleUserEdit = (user) => {
    console.log(user);
    this.setState({ currentUser: user })
    this.props.history.push('/edit')
  }

  render () {
    return(
    <div>
      <Switch>
        <Route path="/profile" render={(routerProps) => <ProfilePage {...routerProps} postHandle={this.postHandle} editPage={this.handleUserEdit}/>} />
        <Route path="/login" render={(routerProps) => <LoginPage {...routerProps} newUser={this.state}/>} />
        <Route path="/signup" render={(routerProps) => <SignUpPage {...routerProps} newUserSignIn={this.newUserSignIn} />} />
        <Route path="/edit" render={(routerProps) => <EditUserPage {...routerProps} currentUser={this.state.currentUser} />} />
        <Route path="/post" render={(routerProps) => <PostView {...routerProps} currentPost={this.state.currentPost}/>} />
      </Switch>
    </div>
  )
  }
}

export default App;
